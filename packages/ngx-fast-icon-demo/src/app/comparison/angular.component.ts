import { ChangeDetectionStrategy, Component, computed, input, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';
import { BaseDemoComponent } from '../misc/base-demo.component';
import { DEMO_ROUTE } from '../misc/constants';

@Component({
    template: `
    <app-controller [demoLib]='"Angular svg icon"' [tester]='tester' />
    <div class='row icons' [class]='layout()'>
      @for (list of countArr(); track $index) {
        <ul class='group'>
          @for (icon of tester.icons; track $index) {
            <li>
              <svg-icon [src]='$any(icon)' [svgStyle]="{ 'width.px': 30, 'height.px': 30 }" />
            </li>
          }
        </ul>
      }
    </div>
  `,
    imports: [AsyncPipe, ControllerComponent, SvgIconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AngularComponent extends BaseDemoComponent {
  constructor() {
    super();
    this.tester.activeDemo.set(DEMO_ROUTE.ANGULAR);
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
