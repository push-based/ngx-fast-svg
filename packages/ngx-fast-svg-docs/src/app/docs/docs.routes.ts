import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Route, Router } from '@angular/router';

import { DocPage } from '../content/content.model';
import { DOCS_INDEX } from '../content/generated/docs-index';

export const FIRST_DOC = DOCS_INDEX[0].slug;

/** Loads the page module for the :slug param, or sends unknown slugs to the first page. */
const resolveDocPage: ResolveFn<DocPage | RedirectCommand> = (route: ActivatedRouteSnapshot) => {
  const entry = DOCS_INDEX.find((d) => d.slug === route.paramMap.get('slug'));
  if (!entry) {
    return new RedirectCommand(inject(Router).parseUrl(`/docs/${FIRST_DOC}`));
  }
  return entry.load();
};

export const DOCS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./docs-layout.component').then((m) => m.DocsLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: FIRST_DOC },
      {
        path: ':slug',
        resolve: { page: resolveDocPage },
        loadComponent: () =>
          import('./doc-page.component').then((m) => m.DocPageComponent),
      },
    ],
  },
];
