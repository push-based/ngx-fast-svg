import { Component } from '@angular/core';
import { SUPPORTED_ICONS } from '../icon-data';
import { IconTester } from '../misc/icon-tester.service';
import { ControllerComponent } from '../misc/controller.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Fast svg"' [tester]='tester' />
    <div class='row icons' [ngClass]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class='group'>
          @for (icon of list; track $index) {
            <li>
              <fast-svg class='fast-svg-icon' [name]='icon' />
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
    NgClass,
    AsyncPipe,
    FastSvgComponent
  ]
})
export class FastIconRouteComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(SUPPORTED_ICONS);
  }
}
