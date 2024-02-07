import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Fast svg"' [tester]='tester' />
    <div class='row icons' [class]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class='group'>
          @for (icon of list; track $index) {
            <li>
              <fast-svg [name]='icon' />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [AsyncPipe, ControllerComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FastIconRouteComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(SUPPORTED_ICONS);
  }
}
