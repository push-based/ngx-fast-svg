import { Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { LAYOUT_SETTING, LayoutSetting } from './constants';

@Injectable({ providedIn: 'root' })
export class IconTester {
  readonly LAYOUT_SETTINGS = Object.values(LAYOUT_SETTING);
  readonly activeLayoutSetting = signal<LayoutSetting>(this.LAYOUT_SETTINGS[0]);
  readonly iconListCount = signal<number>(0);
  readonly activeDemo = signal<string | undefined>(undefined);

  icons?: string[] | IconDefinition[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  setLayout(setting: LayoutSetting) {
    this.activeLayoutSetting.set(setting);
    this.updateLocation();
  }

  updateList(number: number): void {
    this.iconListCount.update((count) => count + number);
    this.updateLocation();
  }

  defineSet(set: string[] | IconDefinition[]) {
    this.icons = set;
  }

  reload() {
    window.location.reload();
  }

  private updateLocation(): void {
    this.router.navigate(
      [this.activeDemo(), this.activeLayoutSetting(), this.iconListCount()],
      { relativeTo: this.activatedRoute }
    );
  }
}
