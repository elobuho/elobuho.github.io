import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { DescriptionDirective } from './description.directive';

@Component({
  selector: 'app-example',
  imports: [NgTemplateOutlet],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  title = input.required<string>();

  description = contentChild(DescriptionDirective, { read: TemplateRef });
}
