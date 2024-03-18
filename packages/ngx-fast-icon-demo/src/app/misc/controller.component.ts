import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconTester } from './icon-tester.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { LAYOUT_SETTING_NAME } from './constants';

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
      @for (setting of tester.LAYOUT_SETTINGS; track setting) {
        <button
          [ngClass]='{ active: setting === tester.activeLayoutSetting()}'
          (click)='tester.setLayout(setting)'>
          {{LAYOUT_NAME[setting]}}
        </button>
      }
    </div>
    <h4>Content controls</h4>
    <div class='buttons-wrapper'>
      <button (click)='tester.updateList(1)'>Add</button>
      <button (click)='tester.updateList(-1)'>Remove</button>
      <button (click)='tester.reload()'>Reload page</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerComponent {
  @Input({required: true}) demoLib!: string;
  @Input({required: true}) tester!: IconTester;
  protected readonly LAYOUT_NAME = LAYOUT_SETTING_NAME;
}
