import { Injectable, signal } from '@angular/core';

import { DocPage } from '../content/content.model';

/** The docs page currently shown, so the layout can render its table of contents. */
@Injectable({ providedIn: 'root' })
export class DocsState {
  readonly page = signal<DocPage | null>(null);
}
