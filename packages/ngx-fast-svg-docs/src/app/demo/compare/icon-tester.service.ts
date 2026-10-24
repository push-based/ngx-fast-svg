import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { COMPARE_BASE, CompareLib, Layout, LAYOUTS } from '../shared/constants';

/**
 * Shared state of the comparison pages. Every change is written to the URL
 * (/demo/compare/<lib>/<layout>/<count>) so a scenario can be reloaded or
 * shared, and switching library keeps the layout and count.
 */
@Injectable({ providedIn: 'root' })
export class IconTester {
  readonly LAYOUT_SETTINGS = LAYOUTS;
  readonly activeLayoutSetting = signal<Layout>(LAYOUTS[0]);
  readonly iconListCount = signal(0);
  readonly activeDemo = signal<CompareLib | undefined>(undefined);

  icons: readonly string[] | readonly IconDefinition[] = [];

  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  setLayout(setting: Layout) {
    this.activeLayoutSetting.set(setting);
    this.updateLocation();
  }

  updateList(delta: number) {
    this.iconListCount.update((count) => Math.max(0, count + delta));
    this.updateLocation();
  }

  defineSet(set: readonly string[] | readonly IconDefinition[]) {
    this.icons = set;
  }

  reload() {
    this.document.defaultView?.location.reload();
  }

  private updateLocation() {
    this.router.navigate([
      COMPARE_BASE,
      this.activeDemo(),
      this.activeLayoutSetting(),
      this.iconListCount(),
    ]);
  }
}
