import { Component } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
import { ControllerComponent } from '../../misc/controller.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Angular svg icon"' [tester]='tester' />
    <div class='row icons' [ngClass]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class='group'>
          @for (icon of list; track $index) {
            <li>
              <svg-icon
                [src]='icon'
                [svgStyle]="{ 'width.px': 30, 'height.px': 30 }"
              />
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
  `],
  imports: [
    ControllerComponent,
    AsyncPipe,
    NgClass,
    SvgIconComponent,
    FastSvgComponent
  ]
})
export class AngularComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
