/**
 * No icon library. Every other fixture is this app plus one library, so the
 * difference between a fixture and this baseline is what the library costs.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { COMMON_PROVIDERS } from '../common';
import { ICON_NAMES } from '../icons';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon) {
        <li></li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = ICON_NAMES;
}

void bootstrapApplication(AppComponent, { providers: [...COMMON_PROVIDERS] });
