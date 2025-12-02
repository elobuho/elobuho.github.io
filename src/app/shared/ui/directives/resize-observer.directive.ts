import {
  afterNextRender,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { Subject, throttleTime } from 'rxjs';

@Directive({
  selector: '[uiResize]',
})
export class ResizeObserverDirective implements OnDestroy {
  private uiResize$ = new Subject<ResizeObserverEntry>();
  uiResize = outputFromObservable(
    this.uiResize$.pipe(
      throttleTime(500, undefined, { leading: true, trailing: true })
    )
  );
  private elementRef = inject(ElementRef);
  private observer: ResizeObserver;

  constructor() {
    afterNextRender(() => {
      this.observer = new ResizeObserver((entries) => {
        this.uiResize$.next(entries[0]);
      });
      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
