import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { IconModule, IconService} from '@ant-design/icons-angular';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';

import { AllIcons } from './ant-icons';
import { BaseDemoComponent } from '../misc/base-demo.component';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Ant design icon"' [tester]='tester' />
    <div class='row icons' [class]='layout()'>
      @for (list of countArr(); track $index) {
        <ul class='group'>
          @for (icon of tester.icons; track $index) {
            <li>
              <i style='font-size: 30px;' antIcon [type]='$any(icon)' theme='fill'></i>
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [AsyncPipe, ControllerComponent, IconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AntComponent extends BaseDemoComponent {
  constructor(private iconService: IconService) {
    super();
    this.tester.defineSet(SUPPORTED_ICONS);
    this.iconService.addIcon(...(AllIcons));
  }
}
