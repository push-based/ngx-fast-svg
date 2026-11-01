import { Route } from '@angular/router';

export interface FeatureEntry {
  slug: string;
  title: string;
  summary: string;
  load: Route['loadComponent'];
}

export const FEATURES: FeatureEntry[] = [
  {
    slug: 'sizing',
    title: 'Sizing',
    summary: 'size, width and height, and the default size.',
    load: () => import('./sizing.component').then((m) => m.SizingComponent),
  },
  {
    slug: 'suspense',
    title: 'Suspense placeholder',
    summary: 'What shows while an icon is loading.',
    load: () => import('./suspense.component').then((m) => m.SuspenseComponent),
  },
  {
    slug: 'lazy-loading',
    title: 'Lazy loading',
    summary: 'Icons are requested when they come into view.',
    load: () => import('./lazy-loading.component').then((m) => m.LazyLoadingComponent),
  },
  {
    slug: 'viewbox',
    title: 'viewBox',
    summary: 'Why the SVG file needs one.',
    load: () => import('./viewbox.component').then((m) => m.ViewBoxComponent),
  },
  {
    slug: 'load-strategy',
    title: 'Load strategy',
    summary: 'Resolve URLs lazily and replace the fetch.',
    load: () => import('./load-strategy.component').then((m) => m.LoadStrategyComponent),
  },
  {
    slug: 'ssr-hydration',
    title: 'SSR and hydration',
    summary: 'Icons shipped in the HTML, zero requests on the client.',
    load: () => import('./ssr-hydration.component').then((m) => m.SsrHydrationComponent),
  },
];
