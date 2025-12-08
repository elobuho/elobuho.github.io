import { Component, DOCUMENT, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkeletonDirective } from '../../../shared/ui/skeleton/skeleton.directive';
import { DescriptionDirective } from '../../ui/example/description.directive';
import { ExampleComponent } from '../../ui/example/example.component';

@Component({
  selector: 'app-skeleton-demo',
  imports: [
    SkeletonDirective,
    ExampleComponent,
    DescriptionDirective,
    RouterLink,
  ],
  templateUrl: './skeleton-demo.component.html',
  styleUrl: './skeleton-demo.component.css',
})
export class SkeletonDemoComponent {
  isLoading = signal(true);
  isLoadingTimed = signal(true);

  private window: Window;
  private readonly document = inject(DOCUMENT);
  constructor() {
    this.window = this.document.defaultView;
  }

  toggleIsLoading() {
    this.isLoading.update((curr) => !curr);
  }

  loadingTimeout = effect(() => {
    this.window.setTimeout(() => {
      this.isLoadingTimed.set(false);
    }, 3000);
  });
}
