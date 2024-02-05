import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { IconTester } from '../misc/icons-tester/icon-tester.service';
import { ControllerComponent } from '../misc/controller.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  template: `
    <app-controller [demoLib]='"Font awesome icon"' [tester]='tester' />
    <div class='row icons' [ngClass]='tester.layout | async'>
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
  styles: [`
    .group {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    li {
      width: 30px;
      height: 30px;
    }
  `],
  imports: [
    ControllerComponent,
    AsyncPipe,
    NgClass,
    FaIconComponent
  ]
})
export class FontAwesomeComponent {
  constructor(public tester: IconTester) {
    console.log(faCircleUser);
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
