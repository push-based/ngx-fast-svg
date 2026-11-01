import { Route } from '@angular/router';
import { provideAngularSvgIcon } from 'angular-svg-icon';

import { CompareLib } from './shared/constants';

const COMPARE_COMPONENTS: Record<CompareLib, () => Promise<unknown>> = {
  'fast-svg': () => import('./compare/fast-svg.component').then((m) => m.FastSvgCompareComponent),
  material: () => import('./compare/material.component').then((m) => m.MaterialCompareComponent),
  ionic: () => import('./compare/ionic.component').then((m) => m.IonicCompareComponent),
  'font-awesome': () =>
    import('./compare/font-awesome.component').then((m) => m.FontAwesomeCompareComponent),
  angular: () =>
    import('./compare/angular-svg-icon.component').then((m) => m.AngularSvgIconCompareComponent),
  ant: () => import('./compare/ant.component').then((m) => m.AntCompareComponent),
};

export const DEMO_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./demo-layout.component').then((m) => m.DemoLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'compare' },
      {
        path: 'compare',
        // Only the comparison pages need angular-svg-icon; keep it out of the main bundle.
        providers: [provideAngularSvgIcon()],
        loadComponent: () =>
          import('./compare/compare-layout.component').then((m) => m.CompareLayoutComponent),
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./compare/compare-intro.component').then((m) => m.CompareIntroComponent),
          },
          ...(Object.keys(COMPARE_COMPONENTS) as CompareLib[]).map(
            (lib): Route => ({
              path: `${lib}/:layout/:count`,
              loadComponent: COMPARE_COMPONENTS[lib] as Route['loadComponent'],
            })
          ),
        ],
      },
      {
        path: 'features',
        loadChildren: () =>
          import('./features/features.routes').then((m) => m.FEATURES_ROUTES),
      },
    ],
  },
];
