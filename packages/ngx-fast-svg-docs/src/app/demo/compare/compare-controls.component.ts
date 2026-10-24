import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { LAYOUT_DESCRIPTION, LAYOUT_NAME } from '../shared/constants';
import { IconTester } from './icon-tester.service';

@Component({
  selector: 'docs-compare-controls',
  template: `
    <header class="compare__header">
      <p class="text-subtitle compare__eyebrow">Library comparison</p>
      <h1 class="text-section-title-lg compare__title">{{ demoLib() }}</h1>
    </header>

    <div class="compare__controls">
      <fieldset class="compare__group">
        <legend class="text-caption">Layout</legend>
        @for (setting of tester.LAYOUT_SETTINGS; track setting) {
          <button
            type="button"
            class="pb-btn"
            [class.pb-btn-primary]="setting === tester.activeLayoutSetting()"
            [class.pb-btn-ghost]="setting !== tester.activeLayoutSetting()"
            [title]="LAYOUT_DESCRIPTION[setting]"
            (click)="tester.setLayout(setting)"
          >
            {{ LAYOUT_NAME[setting] }}
          </button>
        }
      </fieldset>

      <fieldset class="compare__group">
        <legend class="text-caption">Icons</legend>
        <button type="button" class="pb-btn pb-btn-primary" (click)="tester.updateList(1)">Add</button>
        <button
          type="button"
          class="pb-btn pb-btn-ghost"
          [disabled]="tester.iconListCount() === 0"
          (click)="tester.updateList(-1)"
        >
          Remove
        </button>
        <button type="button" class="pb-btn pb-btn-ghost" (click)="tester.reload()">Reload page</button>
        <ng-content />
        <span class="text-body-sm compare__count">
          {{ tester.iconListCount() }} × {{ tester.icons.length }} =
          {{ tester.iconListCount() * tester.icons.length }} icons
        </span>
      </fieldset>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareControlsComponent {
  readonly demoLib = input.required<string>();
  protected readonly tester = inject(IconTester);
  protected readonly LAYOUT_NAME = LAYOUT_NAME;
  protected readonly LAYOUT_DESCRIPTION = LAYOUT_DESCRIPTION;
}
