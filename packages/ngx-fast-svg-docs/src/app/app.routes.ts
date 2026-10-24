import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.routes').then((m) => m.DOCS_ROUTES),
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.routes').then((m) => m.DEMO_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
