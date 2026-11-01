import { afterNextRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { SUPPORTED_ICONS } from '../shared/icon-data';
import { CodeBoxComponent } from './code-box.component';
import { FeaturePageComponent } from './feature-page.component';
import { ResourceLogComponent } from './resource-log.component';

@Component({
  template: `
    <docs-feature-page
      title="Lazy loading"
      lead="An icon's file is requested when the icon nears the viewport, through the browser's own loading=&quot;lazy&quot;. Scroll down and watch the request log fill up."
    >
      <section class="feature-example feature-example--split">
        <div class="lazy-column">
          @if (mounted()) {
            @for (icon of icons; track icon; let i = $index) {
              <figure class="feature-example__figure lazy-column__item">
                <fast-svg [name]="'lazy/' + icon" size="40" />
                <figcaption class="text-caption">#{{ i + 1 }} {{ icon }}</figcaption>
              </figure>
            }
          }
        </div>
        <aside class="feature-example__aside">
          <docs-resource-log match="scope=lazy" emptyText="Nothing yet. Scroll the column." />
          <docs-code-box snippet="lazy-loading.html" title="template" />
        </aside>
      </section>

      <section class="feature-notes prose">
        <h2>How</h2>
        <p>
          Each <code>&lt;fast-svg&gt;</code> whose icon is not cached yet appends a hidden
          <code>&lt;img loading="lazy"&gt;</code> pointing at the file. The browser decides when to
          fetch it. On <code>load</code> the registry fetches the same URL, which hits the HTTP cache,
          parses it and caches it in the DOM.
        </p>
        <p>
          This list is rendered only in the browser so the prerendered HTML does not already contain
          the icons. The icons use the <code>lazy/</code> scope so they are not served from the cache
          another page filled.
        </p>
      </section>
    </docs-feature-page>
  `,
  imports: [FeaturePageComponent, CodeBoxComponent, ResourceLogComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyLoadingComponent {
  protected readonly icons = SUPPORTED_ICONS.slice(0, 12);
  protected readonly mounted = signal(false);

  constructor() {
    afterNextRender(() => this.mounted.set(true));
  }
}
