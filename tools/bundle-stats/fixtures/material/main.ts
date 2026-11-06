/** Baseline + @angular/material/icon. Icons are fetched as .svg files over HttpClient. */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { bootstrapApplication, DomSanitizer } from '@angular/platform-browser';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { COMMON_PROVIDERS } from '../common';
import { ICON_NAMES, iconUrl } from '../icons';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon) {
        <li><mat-icon [svgIcon]="icon" /></li>
      }
    </ul>
  `,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = ICON_NAMES;

  constructor() {
    const sanitizer = inject(DomSanitizer);
    const registry = inject(MatIconRegistry);
    for (const icon of ICON_NAMES) {
      registry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(iconUrl(icon)));
    }
  }
}

void bootstrapApplication(AppComponent, {
  providers: [...COMMON_PROVIDERS],
});
