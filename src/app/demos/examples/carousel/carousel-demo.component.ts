import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonNextDirective } from '../../../shared/ui/carousel/button-next.directive';
import { ButtonPrevDirective } from '../../../shared/ui/carousel/button-prev.directive';
import { CarouselComponent } from '../../../shared/ui/carousel/carousel.component';
import { ItemDirective } from '../../../shared/ui/directives/item.directive';
import { DescriptionDirective } from '../../ui/example/description.directive';
import { ExampleComponent } from '../../ui/example/example.component';

@Component({
  selector: 'app-carousel-demo',
  imports: [
    CarouselComponent,
    ItemDirective,
    NgOptimizedImage,
    ExampleComponent,
    DescriptionDirective,
    ButtonNextDirective,
    ButtonPrevDirective,
    RouterLink,
  ],
  templateUrl: './carousel-demo.component.html',
  styleUrl: './carousel-demo.component.css',
})
export class CarouselDemoComponent {}
