import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { CodeBoxComponent } from './code-box.component';
import { DemoSettings } from './demo-settings.service';
import { FeaturePageComponent } from './feature-page.component';
import { ResourceLogComponent } from './resource-log.component';

const SLOW_ICONS = ['sad', 'error', 'delete', 'genre', 'imdb', 'website'];

@Component({
  template: `
    <docs-feature-page
      title="Suspense placeholder"
      lead="Until an icon's file is parsed, the component renders the suspense SVG in the final box. This page adds 1.5 s of latency to every fetch so you can watch it."
    >
      <section class="feature-example">
        <div class="feature-example__toolbar">
          <button type="button" class="pb-btn pb-btn-primary" (click)="load()">
            {{ run() ? 'Load again' : 'Load icons' }}
          </button>
          <span class="text-body-sm feature-example__hint">
            Each run uses fresh names, so the icons are never served from the cache.
          </span>
        </div>
        <div class="feature-example__stage feature-example__stage--row">
          @if (run(); as run) {
            @for (icon of icons; track icon) {
              <fast-svg [name]="'slow' + run + '/' + icon" size="40" />
            }
          } @else {
            <p class="text-body-sm feature-example__placeholder">Press "Load icons".</p>
          }
        </div>
        <docs-resource-log match="scope=slow" />
      </section>

      <section class="feature-notes prose">
        <h2>What you see</h2>
        <ol>
          <li>The dashed ring is this site's <code>suspenseSvgString</code>. It is parsed once and referenced as <code>&lt;use href="#suspense"&gt;</code>.</li>
          <li>When the file arrives, the registry appends it to the cache and the <code>href</code> flips to <code>#name</code>. The box never changes size.</li>
        </ol>
        <docs-code-box snippet="suspense.ts" title="app.config.ts" />
      </section>
    </docs-feature-page>
  `,
  imports: [FeaturePageComponent, CodeBoxComponent, ResourceLogComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuspenseComponent implements OnDestroy {
  private readonly settings = inject(DemoSettings);
  protected readonly icons = SLOW_ICONS;
  protected readonly run = signal(0);

  constructor() {
    this.settings.latencyMs.set(1500);
  }

  load() {
    this.run.update((r) => r + 1);
  }

  ngOnDestroy() {
    this.settings.reset();
  }
}
