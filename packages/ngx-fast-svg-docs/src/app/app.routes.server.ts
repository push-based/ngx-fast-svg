import { RenderMode, ServerRoute } from '@angular/ssr';

import { DOCS_INDEX } from './content/generated/docs-index';
import { COMPARE_LIBS, COUNTS, LAYOUTS } from './demo/shared/constants';

/**
 * Every route is prerendered to a static HTML file for GitHub Pages.
 * Parameterized routes list their params here; this replaces the old
 * hand-maintained routes.txt. Keep the param functions free of browser APIs:
 * they run in the build's route-extraction worker.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'docs/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return DOCS_INDEX.map(({ slug }) => ({ slug }));
    },
  },
  ...COMPARE_LIBS.map(
    (lib): ServerRoute => ({
      path: `demo/compare/${lib}/:layout/:count`,
      renderMode: RenderMode.Prerender,
      async getPrerenderParams() {
        return LAYOUTS.flatMap((layout) =>
          COUNTS.map((count) => ({ layout, count: String(count) }))
        );
      },
    })
  ),
  { path: '**', renderMode: RenderMode.Prerender },
];
