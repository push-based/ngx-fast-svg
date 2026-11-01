import { Route } from '@angular/router';

import { FEATURES } from './features';

export const FEATURES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./features-layout.component').then((m) => m.FeaturesLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: FEATURES[0].slug },
      ...FEATURES.map((f): Route => ({ path: f.slug, loadComponent: f.load })),
    ],
  },
];
