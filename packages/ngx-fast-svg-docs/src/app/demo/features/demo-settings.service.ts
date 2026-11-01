import { Injectable, signal } from '@angular/core';

import { SVG_ICON_BASE } from '../../core/svg-url';

/**
 * Knobs the feature demos turn on the browser load strategy. Defaults are
 * no-ops, so pages that don't touch them behave like a plain install.
 */
@Injectable({ providedIn: 'root' })
export class DemoSettings {
  /** Extra delay added to every fetch. */
  readonly latencyMs = signal(0);
  /** Folder the strategy prefixes to the file name. */
  readonly basePath = signal(SVG_ICON_BASE);

  reset() {
    this.latencyMs.set(0);
    this.basePath.set(SVG_ICON_BASE);
  }
}
