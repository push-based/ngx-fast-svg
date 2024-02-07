import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Font awesome icon"' [tester]='tester' />
    <div class='row icons' [class]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class='group'>
          @for (icon of list; track $index) {
            <li>
              <fa-icon size='lg' [icon]='icon'></fa-icon>
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [AsyncPipe, ControllerComponent, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FontAwesomeComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet([
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
    ]);
  }
}
