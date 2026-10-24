/** Folder that holds the icon files, relative to the base href. */
export const SVG_ICON_BASE = 'assets/svg-icons';

/**
 * Maps an icon name to its file.
 *
 * Names may carry a scope prefix, `lazy/search`, which maps to
 * `search.svg?scope=lazy`. The server ignores the query, but the registry
 * caches by name, so a scoped icon is never served from the cache another
 * page filled. The feature demos use this to load icons fresh every time.
 */
export const svgFile = (name: string): string => {
  const slash = name.indexOf('/');
  if (slash === -1) {
    return `${name}.svg`;
  }
  return `${name.slice(slash + 1)}.svg?scope=${name.slice(0, slash)}`;
};

/** Full relative URL of an icon. Shared by the server config and the other libraries. */
export const svgUrl = (name: string): string => `${SVG_ICON_BASE}/${svgFile(name)}`;
