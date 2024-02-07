import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { ControllerComponent } from '../misc/controller.component';
import { IconTester } from '../misc/icon-tester.service';
import { SUPPORTED_ICONS } from '../misc/icon-data';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Angular svg icon"' [tester]='tester' />
    <div class='row icons' [class]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class='group'>
          @for (icon of list; track $index) {
            <li>
              <svg-icon [src]='icon' [svgStyle]="{ 'width.px': 30, 'height.px': 30 }" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [AsyncPipe, ControllerComponent, SvgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AngularComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
