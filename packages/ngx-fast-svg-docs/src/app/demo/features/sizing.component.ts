import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { CodeBoxComponent } from './code-box.component';
import { FeaturePageComponent } from './feature-page.component';

@Component({
  template: `
    <docs-feature-page
      title="Sizing"
      lead="One input for square icons, two for everything else. Dimensions are applied before the file arrives, so nothing shifts."
    >
      <section class="feature-example">
        <div class="feature-example__stage feature-example__stage--row">
          @for (size of sizes; track size) {
            <figure class="feature-example__figure">
              <fast-svg name="play" [size]="size" />
              <figcaption class="text-caption">size="{{ size }}"</figcaption>
            </figure>
          }
          <figure class="feature-example__figure">
            <fast-svg name="logo-viewbox" width="52" height="71" />
            <figcaption class="text-caption">width="52" height="71"</figcaption>
          </figure>
          <figure class="feature-example__figure">
            <fast-svg name="search" />
            <figcaption class="text-caption">no input: defaultSize (24)</figcaption>
          </figure>
        </div>
        <docs-code-box snippet="sizing.html" title="template" />
      </section>

      <section class="feature-notes prose">
        <h2>Rules</h2>
        <ul>
          <li><code>width = width || size</code></li>
          <li><code>height = height || width || size</code></li>
          <li><code>size</code> falls back to the <code>defaultSize</code> option, so an icon always has dimensions.</li>
        </ul>
        <p>
          The values are written as attributes on the rendered <code>&lt;svg&gt;</code>. Pair them with a
          <code>viewBox</code> in the file so the drawing scales to the box.
        </p>
        <docs-code-box snippet="provide-default-size.ts" title="app.config.ts" />
      </section>
    </docs-feature-page>
  `,
  imports: [FeaturePageComponent, CodeBoxComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizingComponent {
  protected readonly sizes = ['16', '24', '48'];
}
