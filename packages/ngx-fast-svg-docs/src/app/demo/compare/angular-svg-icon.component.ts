import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

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
              <svg-icon [src]="$any(icon)" [svgStyle]="{ 'width.px': 30, 'height.px': 30 }" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [CompareControlsComponent, SvgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AngularSvgIconCompareComponent extends BaseDemoComponent {
  protected readonly name = COMPARE_LIB_NAME.angular;

  constructor() {
    super();
    this.tester.activeDemo.set('angular');
    this.tester.defineSet(SUPPORTED_ICONS.map(svgUrl));
  }
}
