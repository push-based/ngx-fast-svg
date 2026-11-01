import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { COMPARE_BASE, COMPARE_LIB_NAME, COMPARE_LIBS, LAYOUT_DESCRIPTION, LAYOUT_NAME, LAYOUTS } from '../shared/constants';
import { IconTester } from './icon-tester.service';

@Component({
  selector: 'docs-compare-intro',
  template: `
    <header class="compare__header">
      <p class="text-subtitle compare__eyebrow">Library comparison</p>
      <h1 class="text-section-title-lg compare__title">Six libraries, one icon set</h1>
      <p class="text-lead">
        Each page renders the same 21 SVG files with a different Angular icon library,
        in batches you add one at a time. Profile them with your browser's devtools.
      </p>
    </header>

    <ol class="compare__steps">
      <li>Pick a library on the left.</li>
      <li>Choose a layout. <strong>Off screen</strong> and <strong>Distributed</strong> are where lazy loading matters.</li>
      <li>Open the Performance panel and start recording.</li>
      <li>Press <strong>Add</strong> a few times, then stop the recording and compare scripting, rendering and network.</li>
    </ol>

    <h2 class="text-section-title">Layouts</h2>
    <dl class="compare__layouts">
      @for (layout of layouts; track layout) {
        <div class="pb-card">
          <dt class="pb-card-title">{{ layoutName[layout] }}</dt>
          <dd class="pb-card-body">{{ layoutDescription[layout] }}</dd>
        </div>
      }
    </dl>

    <h2 class="text-section-title">Start with</h2>
    <div class="compare__start">
      @for (lib of libs; track lib) {
        <a class="pb-btn pb-btn-ghost" [routerLink]="[base, lib, 'on-screen', 3]">{{ names[lib] }}</a>
      }
    </div>
  `,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareIntroComponent implements OnInit {
  private readonly tester = inject(IconTester);
  protected readonly libs = COMPARE_LIBS;
  protected readonly names = COMPARE_LIB_NAME;
  protected readonly layouts = LAYOUTS;
  protected readonly layoutName = LAYOUT_NAME;
  protected readonly layoutDescription = LAYOUT_DESCRIPTION;
  protected readonly base = COMPARE_BASE;

  ngOnInit() {
    this.tester.activeDemo.set(undefined);
  }
}
