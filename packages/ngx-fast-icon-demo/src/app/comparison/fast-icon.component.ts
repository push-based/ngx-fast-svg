import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';
import { BaseDemoComponent } from '../misc/base-demo.component';
import { DEMO_ROUTE } from '../misc/constants';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Fast svg"' [tester]='tester' />
    <div class='row icons' [class]='layout()'>
      @for (list of countArr(); track $index) {
        <ul class='group'>
          @for (icon of tester.icons; track $index) {
            <li>
              <fast-svg [name]='$any(icon)' />
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
export class FastIconRouteComponent extends BaseDemoComponent {
  constructor() {
    super();
    this.tester.activeDemo.set(DEMO_ROUTE.FAST_SVG);
    this.tester.defineSet(SUPPORTED_ICONS);
  }
}
