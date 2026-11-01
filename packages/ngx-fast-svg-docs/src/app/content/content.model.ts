export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface DocPageMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
}

export interface DocPage extends DocPageMeta {
  /** Rendered, highlighted HTML produced at build time. */
  html: string;
  toc: TocEntry[];
}

export interface DocPageEntry extends DocPageMeta {
  load: () => Promise<DocPage>;
}
