import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { IconModule, IconService} from '@ant-design/icons-angular';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';

import { AllIcons } from './ant-icons';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Ant design icon"' [tester]='tester' />
    <div class='row icons' [class]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class="group">
          @for (icon of list; track $index) {
            <li>
              <i style='font-size: 30px;' antIcon [type]='icon' theme='fill'></i>
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
export class AntComponent {
  constructor(private iconService: IconService, public tester: IconTester) {
    this.tester.defineSet(SUPPORTED_ICONS);
    this.iconService.addIcon(...(AllIcons));
  }
}
