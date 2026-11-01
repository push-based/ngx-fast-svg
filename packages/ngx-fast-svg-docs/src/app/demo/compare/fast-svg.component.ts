import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { COMPARE_LIB_NAME } from '../shared/constants';
import { SUPPORTED_ICONS } from '../shared/icon-data';
import { BaseDemoComponent } from './base-demo.component';
import { CompareControlsComponent } from './compare-controls.component';

@Component({
  template: `
    <docs-compare-controls [demoLib]="name">
      <button type="button" class="pb-btn pb-btn-ghost" (click)="shuffle()">Shuffle and resize</button>
    </docs-compare-controls>
    <div class="row icons compare__icons" [class]="layout()">
      @for (list of countArr(); track $index) {
        <ul class="group">
          @for (icon of tester.icons; track icon) {
            <li>
              <fast-svg [name]="$any(icon)" [size]="size()" />
            </li>
          }
        </ul>
      }
    </div>
  `,
  imports: [CompareControlsComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FastSvgCompareComponent extends BaseDemoComponent {
  protected readonly name = COMPARE_LIB_NAME['fast-svg'];
  protected readonly size = signal('24');

  constructor() {
    super();
    this.tester.activeDemo.set('fast-svg');
    this.tester.defineSet(SUPPORTED_ICONS);
  }

  /** Reorders and resizes every icon to exercise input changes on existing components. */
  shuffle() {
    this.tester.defineSet([...SUPPORTED_ICONS].sort(() => Math.random() - 0.5));
    this.size.update((s) => (s === '24' ? '32' : '24'));
  }
}
