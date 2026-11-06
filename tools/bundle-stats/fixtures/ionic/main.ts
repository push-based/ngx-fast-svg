/**
 * Baseline + @ionic/angular/standalone. Icons are fetched as .svg files.
 *
 * Deliberately no provideIonicAngular(): that sets up Ionic's config, platform
 * and overlays, none of which ion-icon needs, and including it bills 135 KB of
 * unrelated framework to the icon row. IonIcon injects only ChangeDetectorRef,
 * ElementRef and NgZone, and defines its own custom element on import, so it
 * stands alone. This row is the cost of Ionic's icon, not of Ionic.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { IonIcon } from '@ionic/angular/standalone';

import { COMMON_PROVIDERS } from '../common';
import { ICON_NAMES, iconUrl } from '../icons';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon) {
        <li><ion-icon [src]="icon" /></li>
      }
    </ul>
  `,
  imports: [IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = ICON_NAMES.map(iconUrl);
}

void bootstrapApplication(AppComponent, {
  providers: [...COMMON_PROVIDERS],
});
