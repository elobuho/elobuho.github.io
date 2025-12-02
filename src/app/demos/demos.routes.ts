import { Route } from '@angular/router';
import { DemoListComponent } from './features/demo-list/demo-list.component';

export const demosRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DemoListComponent,
        title: 'Demo List',
      },
      {
        path: 'carousel',
        loadComponent: () =>
          import('./examples/carousel/carousel-demo.component').then(
            (c) => c.CarouselDemoComponent
          ),
        title: 'Carousel Demo',
      },
    ],
  },
];
