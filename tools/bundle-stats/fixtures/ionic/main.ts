/** Baseline + @ionic/angular/standalone. Icons are fetched as .svg files. */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { IonIcon, provideIonicAngular } from '@ionic/angular/standalone';

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
  providers: [...COMMON_PROVIDERS, provideIonicAngular()],
});
