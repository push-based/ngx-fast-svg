import { afterNextRender, ChangeDetectionStrategy, Component, DOCUMENT, inject, signal } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { SUPPORTED_ICONS } from '../shared/icon-data';
import { CodeBoxComponent } from './code-box.component';
import { FeaturePageComponent } from './feature-page.component';
import { ResourceLogComponent } from './resource-log.component';

@Component({
  template: `
    <docs-feature-page
      title="SSR and hydration"
      lead="These icons were fetched while this page was prerendered and shipped inside the HTML. The client hydrates the cache instead of requesting them again."
    >
      <section class="feature-example feature-example--split">
        <div class="feature-example__stage feature-example__stage--row">
          @for (icon of icons; track icon) {
            <fast-svg [name]="icon" size="40" />
          }
        </div>
        <aside class="feature-example__aside">
          <section class="resource-log">
            <header class="resource-log__header">
              <span class="text-caption">Cached in #svg-cache at hydration</span>
              <span class="resource-log__count">{{ cached() ?? '…' }}</span>
            </header>
          </section>
          <docs-resource-log emptyText="No icon request on this page." />
        </aside>
      </section>

      <section class="feature-notes prose">
        <h2>Check it yourself</h2>
        <p>
          Open this page's source (not the devtools DOM): the HTML ends with
          <code>&lt;div id="svg-cache"&gt;</code> holding every icon above. Reload with the
          network panel open: no <code>.svg</code> request is made for them.
        </p>
        <docs-code-box snippet="ssr-strategy.ts" title="app.config.server.ts" />
        <docs-code-box snippet="hydration.ts" title="app.config.ts" />
      </section>
    </docs-feature-page>
  `,
  imports: [FeaturePageComponent, CodeBoxComponent, ResourceLogComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsrHydrationComponent {
  protected readonly icons = SUPPORTED_ICONS.slice(0, 10);
  protected readonly cached = signal<number | null>(null);

  constructor() {
    const document = inject(DOCUMENT);
    afterNextRender(() => {
      this.cached.set(document.getElementById('svg-cache')?.children.length ?? 0);
    });
  }
}
