import { Route } from '@angular/router';
import { BASE_ROUTE, DEMO_ROUTE } from './misc/constants';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: BASE_ROUTE
  },
  {
    path: BASE_ROUTE,
    loadComponent: () => import('./misc/description.component').then((c) => c.DescriptionComponent)
  },
  {
    path: `${DEMO_ROUTE.ANGULAR}/:layout/:count`,
    loadComponent: () => import('./comparison/angular.component').then((c) => c.AngularComponent)
  },
  {
    path: `${DEMO_ROUTE.MATERIAL}/:layout/:count`,
    loadComponent: () => import('./comparison/material.component').then((c) => c.MaterialComponent)
  },
  {
    path: `${DEMO_ROUTE.ANT}/:layout/:count`,
    loadComponent: () => import('./comparison/ant.component').then((c) => c.AntComponent)
  },
  {
    path: `${DEMO_ROUTE.IONIC}/:layout/:count`,
    loadComponent: () => import('./comparison/ionic.component').then((c) => c.IonicComponent)
  },
  {
    path: `${DEMO_ROUTE.FONT_AWESOME}/:layout/:count`,
    loadComponent: () => import('./comparison/font-awesome.component').then((c) => c.FontAwesomeComponent)
  },
  {
    path: `${DEMO_ROUTE.FAST_SVG}/:layout/:count`,
    loadComponent: () => import('./comparison/fast-icon.component').then((c) => c.FastIconRouteComponent)
  }
];
