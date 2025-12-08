import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-skeleton',
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css',
  host: {
    '[style.height.rem]': 'height()',
    '[class]': 'class()',
  },
})
export class SkeletonComponent {
  height = input<number>();
  class = input<string>();
}
