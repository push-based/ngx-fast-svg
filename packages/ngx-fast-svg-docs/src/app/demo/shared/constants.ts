/**
 * Single source of truth for the comparison demo's URL contract:
 * /demo/compare/<lib>/<layout>/<count>. Used by the UI, the Angular routes and
 * the prerender route list, so keep this file free of browser APIs.
 */
export const COMPARE_BASE = '/demo/compare';

export const COMPARE_LIBS = [
  'fast-svg',
  'material',
  'ionic',
  'font-awesome',
  'angular',
  'ant',
] as const;
export type CompareLib = (typeof COMPARE_LIBS)[number];

export const COMPARE_LIB_NAME: Record<CompareLib, string> = {
  'fast-svg': 'ngx-fast-svg',
  material: 'Angular Material',
  ionic: 'Ionic',
  'font-awesome': 'Font Awesome',
  angular: 'angular-svg-icon',
  ant: 'Ant Design',
};

export const LAYOUTS = ['on-screen', 'off-screen', 'distributed'] as const;
export type Layout = (typeof LAYOUTS)[number];

export const LAYOUT_NAME: Record<Layout, string> = {
  'on-screen': 'On screen',
  'off-screen': 'Off screen',
  distributed: 'Distributed',
};

export const LAYOUT_DESCRIPTION: Record<Layout, string> = {
  'on-screen': 'Icons start right below the controls.',
  'off-screen': 'Icons start three viewports down, so none is visible until you scroll.',
  distributed: 'Icons are spread out with large gaps, so only some are visible at a time.',
};

/** The icon counts that get prerendered. Other counts fall back to client rendering. */
export const COUNTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50] as const;
