import { Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.demosRoutes),
    title: 'Demos',
  },
];
