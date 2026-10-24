import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { CodeBoxComponent } from './code-box.component';
import { FeaturePageComponent } from './feature-page.component';

@Component({
  template: `
    <docs-feature-page
      title="viewBox"
      lead="The component copies the file's viewBox onto every reference. Without one, the drawing is clipped to the default box."
    >
      <section class="feature-example">
        <div class="feature-example__stage feature-example__stage--row">
          <figure class="feature-example__figure">
            <fast-svg name="logo-noviewbox" width="52" height="71" />
            <figcaption class="text-caption">file without viewBox: clipped to 0 0 24 24</figcaption>
          </figure>
          <figure class="feature-example__figure">
            <fast-svg name="logo-viewbox" width="52" height="71" />
            <figcaption class="text-caption">same file with viewBox="0 0 52 71"</figcaption>
          </figure>
          <figure class="feature-example__figure">
            <img src="assets/svg-icons/logo-viewbox.svg" width="52" height="71" alt="" />
            <figcaption class="text-caption">&lt;img&gt; for reference</figcaption>
          </figure>
        </div>
        <docs-code-box snippet="viewbox.ts" title="svg-registry.service.ts (excerpt)" />
      </section>

      <section class="feature-notes prose">
        <h2>Rules for your files</h2>
        <ul>
          <li>Put a <code>viewBox</code> on the root <code>&lt;svg&gt;</code>. The first <code>viewBox="…"</code> in the file, in double quotes, is used.</li>
          <li>Start the file with the <code>&lt;svg&gt;</code> element. An XML declaration or comment in front of it breaks parsing.</li>
          <li>Keep internal ids unique across files. All icons share one document, so two gradients with <code>id="a"</code> collide.</li>
        </ul>
      </section>
    </docs-feature-page>
  `,
  imports: [FeaturePageComponent, CodeBoxComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewBoxComponent {}
