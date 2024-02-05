import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'description'
  },
  {
    path: 'description',
    loadComponent: () => import('./misc/description.component').then((c) => c.DescriptionComponent)
  },
  {
    path: 'angular',
    loadComponent: () => import('./comparison/angular.component').then((c) => c.AngularComponent)
  },
  {
    path: 'material',
    loadComponent: () => import('./comparison/material.component').then((c) => c.MaterialComponent)
  },
  {
    path: 'ant',
    loadComponent: () => import('./comparison/ant.component').then((c) => c.AntComponent)
  },
  {
    path: 'ionic',
    loadComponent: () => import('./comparison/ionic.component').then((c) => c.IonicComponent)
  },
  {
    path: 'font-awesome',
    loadComponent: () => import('./comparison/font-awesome.component').then((c) => c.FontAwesomeComponent)
  },
  {
    path: 'fast-svg',
    loadComponent: () => import('./comparison/fast-icon.component').then((c) => c.FastIconRouteComponent)
  }
];
