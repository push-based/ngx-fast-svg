import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';

import { IconDirective, IconService } from '@ant-design/icons-angular';

import { COMPARE_LIB_NAME } from '../shared/constants';
import { SUPPORTED_ICONS } from '../shared/icon-data';
import { AllIcons } from './ant-icons';
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
              <i class="compare__ant-icon" antIcon [type]="$any(icon)" theme="fill"></i>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: `
    .compare__ant-icon {
      font-size: 30px;
    }
  `,
  imports: [CompareControlsComponent, IconDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AntCompareComponent extends BaseDemoComponent {
  protected readonly name = COMPARE_LIB_NAME.ant;
  private readonly iconService = inject(IconService);

  constructor() {
    super();
    this.tester.activeDemo.set('ant');
    this.tester.defineSet(SUPPORTED_ICONS);
    this.iconService.addIcon(...AllIcons);
  }
}
