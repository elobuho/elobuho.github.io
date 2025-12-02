import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  contentChildren,
  ElementRef,
  inject,
  input,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { ItemDirective } from '../directives/item.directive';
import { ResizeObserverDirective } from '../directives/resize-observer.directive';
import { ButtonNextDirective } from './button-next.directive';
import { ButtonPrevDirective } from './button-prev.directive';

type Behaviour = 'smooth' | 'instant';
interface SnapEvent extends Event {
  snapTargetInline: { offsetLeft: number };
}

@Component({
  selector: 'ui-carousel',
  imports: [NgTemplateOutlet, ResizeObserverDirective],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  visibleItems = input(1);
  behaviour = input<Behaviour>('smooth');
  pager = input(true);
  buttons = input(true);
  duration = input(7000);

  carouselEl = inject<ElementRef<HTMLElement>>(ElementRef);
  scrollArea = viewChild<ElementRef>('scrollArea');
  items = contentChildren(ItemDirective, { read: TemplateRef });
  prevBtn = contentChild(ButtonPrevDirective, { read: TemplateRef });
  nextBtn = contentChild(ButtonNextDirective, { read: TemplateRef });

  width = signal(1);
  index = signal(0);

  itemsCount = computed(() => this.items().length);
  itemWidth = computed(() => this.width() / this.visibleItems());
  itemStyle = computed(() => {
    const factor = `${100 / this.visibleItems()}%`;
    return {
      flexBasis: factor,
      minWidth: factor,
      maxWidth: factor,
    };
  });

  timeoutId: number | undefined;
  autoSlideEffect = afterRenderEffect(() => {
    if (this.duration()) {
      this.index();
      window.clearTimeout(this.timeoutId);
      this.timeoutId = window.setTimeout(() => {
        this.onNextClick();
      }, this.duration());
    }
  });

  onResize() {
    this.width.set(this.carouselEl.nativeElement.clientWidth);
  }

  onPrevClick(): void {
    if (this.index() === 0) {
      this.scrollBy(this.itemsCount() - this.visibleItems());
    } else {
      this.scrollBy(-1);
    }
  }

  onNextClick(): void {
    if (this.index() === this.itemsCount() - this.visibleItems()) {
      this.scrollBy(-this.index());
    } else {
      this.scrollBy(1);
    }
  }

  onScrollSnap(event: Event) {
    const offset = (event as SnapEvent).snapTargetInline.offsetLeft;
    const calculatedIndex = Math.round(offset / this.itemWidth());
    this.index.set(
      Number.isSafeInteger(calculatedIndex) && calculatedIndex >= 0
        ? calculatedIndex
        : 0
    );
  }

  onPagerClick(index: number) {
    this.scrollBy(index - this.index());
  }

  private scrollBy(items: number, behavior = this.behaviour()): void {
    this.scrollArea()?.nativeElement.scrollBy({
      left: this.itemWidth() * items,
      behavior,
    });
  }
}
