import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SkeletonComponent } from './skeleton.component';

@Directive({
  selector: '[uiSkeleton]',
})
export class SkeletonDirective {
  isLoading = input.required<boolean>({ alias: 'uiSkeleton' });
  height = input<number | undefined>(undefined, { alias: 'uiSkeletonHeight' });
  repeat = input<number>(1, { alias: 'uiSkeletonRepeat' });
  class = input<string | undefined>(undefined, { alias: 'uiSkeletonClass' });

  private vcr = inject(ViewContainerRef);
  private tpl = inject(TemplateRef);

  private renderSkeleton = () => {
    this.vcr.clear();
    if (this.isLoading()) {
      for (let i = 0; i < this.repeat(); i++) {
        const skeletonRef = this.vcr.createComponent(SkeletonComponent);
        skeletonRef.setInput('height', this.height());
        skeletonRef.setInput('class', this.class());
        skeletonRef.changeDetectorRef.detectChanges();
      }
    } else {
      this.vcr.createEmbeddedView(this.tpl);
    }
  };

  render = effect(this.renderSkeleton);
}
