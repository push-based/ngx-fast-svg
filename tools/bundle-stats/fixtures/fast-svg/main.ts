/** Baseline + @push-based/ngx-fast-svg. Icons are fetched as .svg files. */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { FastSvgComponent, provideFastSVG } from '@push-based/ngx-fast-svg';

import { COMMON_PROVIDERS } from '../common';
import { ICON_NAMES, iconUrl } from '../icons';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon) {
        <li><fast-svg [name]="icon" size="24" /></li>
      }
    </ul>
  `,
  imports: [FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = ICON_NAMES;
}

void bootstrapApplication(AppComponent, {
  providers: [...COMMON_PROVIDERS, provideFastSVG({ url: iconUrl })],
});
