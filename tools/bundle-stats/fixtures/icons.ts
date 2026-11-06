/**
 * The icon set every fixture renders. Mirrors SUPPORTED_ICONS in the docs demo
 * (packages/ngx-fast-svg-docs/src/app/demo/shared/icon-data.ts) so the measured
 * apps stay comparable with the comparison page they feed.
 */
export const ICON_NAMES = [
  'account',
  'back',
  'genre',
  'imdb',
  'play',
  'popular',
  'search',
  'top_rated',
  'upcoming',
  'website',
  'delete',
  'sad',
  'error',
  'consulting',
  'custom_workshops',
  'custom_workshops_1',
  'custom_workshops_2',
  'custom_workshops_3',
  'engineering',
  'who-we-are',
  'workshops',
] as const;

export const ICON_COUNT = ICON_NAMES.length;

/** Where a file-based library would fetch an icon from. No file is ever requested. */
export function iconUrl(name: string): string {
  return `assets/svg-icons/${name}.svg`;
}
