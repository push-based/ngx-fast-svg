import { Route } from '@angular/router';
import { DescriptionComponent } from '../../../ngx-fast-icon-demo/src/app/misc/description.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'description',
  },
  {
    path: 'description',
    loadComponent: () => import('./description/description.component').then(c => c.DescriptionComponent)
  },
];
