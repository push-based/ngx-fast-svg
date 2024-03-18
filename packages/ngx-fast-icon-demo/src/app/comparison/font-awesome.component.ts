import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { BaseDemoComponent } from '../misc/base-demo.component';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Font awesome icon"' [tester]='tester' />
    <div class='row icons' [class]='layout()'>
      @for (list of countArr(); track $index) {
        <ul class='group'>
          @for (icon of tester.icons; track $index) {
            <li>
              <fa-icon size='lg' [icon]='$any(icon)'></fa-icon>
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
export class FontAwesomeComponent extends BaseDemoComponent {
  constructor() {
    super();
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
