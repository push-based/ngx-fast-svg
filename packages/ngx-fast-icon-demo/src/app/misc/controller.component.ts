import { Component, Input } from '@angular/core';
import { IconTester } from './icon-tester.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-controller',
  imports: [
    AsyncPipe,
    NgClass
  ],
  template: `
    <h1>{{demoLib}} demo</h1>
    <h4>Layout setting</h4>
    <div class='buttons-wrapper'>
      @for (button of tester.buttons; track $index) {
        <button
          [ngClass]='{ active: button === (tester.setting | async)}'
          (click)='tester.setLayout(button)'
        >{{ button }}
        </button>
      }
    </div>
    <h4>Content controls</h4>
    <div class='buttons-wrapper'>
      <button (click)='tester.updateList(1)'>Add</button>
      <button (click)='tester.updateList(-1)'>Remove</button>
      <button (click)='tester.reload()'>Reload page</button>
    </div>
  `
})
export class ControllerComponent {
  @Input({required: true}) demoLib!: string;
  @Input({required: true}) tester!: IconTester;
}
