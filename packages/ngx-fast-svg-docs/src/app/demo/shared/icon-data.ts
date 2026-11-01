/** Icon names available under public/assets/svg-icons. Shared by every demo. */
export const SUPPORTED_ICONS = [
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

export type SupportedIcon = (typeof SUPPORTED_ICONS)[number];
