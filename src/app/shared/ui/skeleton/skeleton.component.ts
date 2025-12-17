import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-skeleton',
  imports: [CommonModule],
  template: ``,
  styleUrl: './skeleton.component.css',
  host: {
    '[style.height.rem]': 'height()',
    '[class]': 'class()',
    role: 'status',
    'aria-busy': 'true',
    'aria-label': 'Loading content',
  },
})
export class SkeletonComponent {
  height = input<number>();
  class = input<string>();
}
