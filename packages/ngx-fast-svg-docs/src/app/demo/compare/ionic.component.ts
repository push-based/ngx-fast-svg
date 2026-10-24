import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { IonIcon } from '@ionic/angular/standalone';

import { COMPARE_LIB_NAME } from '../shared/constants';
import { SUPPORTED_ICONS } from '../shared/icon-data';
import { svgUrl } from '../../core/svg-url';
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
              <ion-icon [src]="$any(icon)" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: `
    .compare__icons ion-icon {
      font-size: 24px;
      margin: 3px;
    }
  `,
  imports: [CompareControlsComponent, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class IonicCompareComponent extends BaseDemoComponent {
  protected readonly name = COMPARE_LIB_NAME.ionic;

  constructor() {
    super();
    this.tester.activeDemo.set('ionic');
    this.tester.defineSet(SUPPORTED_ICONS.map(svgUrl));
  }
}
