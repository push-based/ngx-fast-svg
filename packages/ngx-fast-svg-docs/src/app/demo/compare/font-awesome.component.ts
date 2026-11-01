import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { COMPARE_LIB_NAME } from '../shared/constants';
import { BaseDemoComponent } from './base-demo.component';
import { CompareControlsComponent } from './compare-controls.component';

@Component({
  template: `
    <docs-compare-controls [demoLib]="name" />
    <div class="row icons compare__icons" [class]="layout()">
      @for (list of countArr(); track $index) {
        <ul class="group">
          @for (icon of tester.icons; track $index) {
            <li>
              <fa-icon size="lg" [icon]="$any(icon)" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [CompareControlsComponent, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FontAwesomeCompareComponent extends BaseDemoComponent {
  protected readonly name = COMPARE_LIB_NAME['font-awesome'];

  constructor() {
    super();
    this.tester.activeDemo.set('font-awesome');
    // Font Awesome ships its own icon set, so the same icon is repeated.
    this.tester.defineSet(Array.from({ length: 12 }, () => faCircleUser));
  }
}
