/** Baseline + angular-svg-icon. Icons are fetched as .svg files over HttpClient. */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideAngularSvgIcon, SvgIconComponent } from 'angular-svg-icon';

import { COMMON_PROVIDERS } from '../common';
import { ICON_NAMES, iconUrl } from '../icons';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon) {
        <li><svg-icon [src]="icon" [svgStyle]="{ 'width.px': 24, 'height.px': 24 }" /></li>
      }
    </ul>
  `,
  imports: [SvgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = ICON_NAMES.map(iconUrl);
}

void bootstrapApplication(AppComponent, {
  providers: [...COMMON_PROVIDERS, provideAngularSvgIcon()],
});
