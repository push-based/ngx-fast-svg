import { Component } from '@angular/core';
import { IconModule, IconService as AntIconService } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
import { ControllerComponent } from '../../misc/controller.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AllIcons } from './ant-icons';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Ant design icon"' [tester]='tester' />
    <div class='row icons' [ngClass]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class="group">
          @for (icon of list; track $index) {
            <li>
              <i antIcon [type]='icon' theme='fill'></i>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    .group {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    i {
      font-size: 30px;
    }
  `],
  imports: [
    NgClass,
    ControllerComponent,
    IconModule,
    AsyncPipe,
    IonicModule
  ]
})
export class AntComponent {
  constructor(private _iconService: AntIconService, public tester: IconTester) {
    this.tester.defineSet(SUPPORTED_ICONS);
    console.log(AccountBookFill);
    this._iconService.addIcon(...(AllIcons as any));
  }
}
