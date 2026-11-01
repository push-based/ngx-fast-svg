import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { SUPPORTED_ICONS } from '../demo/shared/icon-data';

@Component({
  selector: 'docs-home',
  template: `
    <section class="hero container">
      <p class="text-subtitle hero__eyebrow">Angular · SVG icons</p>
      <h1 class="text-display-5xl hero__title">Fast SVG icons for Angular</h1>
      <p class="text-lead hero__lead">
        Browser-native lazy loading, one DOM cache for every icon, and server-side
        rendering that ships icons in the HTML. One component, no icon fonts, no
        bundle bloat.
      </p>
      <div class="hero__actions">
        <a class="pb-btn pb-btn-lg pb-btn-primary" routerLink="/docs/getting-started">Get started</a>
        <a class="pb-btn pb-btn-lg pb-btn-ghost" routerLink="/demo">See the demo</a>
      </div>
      <pre class="install"><code>npm install @push-based/ngx-fast-svg</code></pre>
    </section>

    <section class="container icon-strip" aria-label="Icons rendered with fast-svg">
      @for (icon of icons; track icon) {
        <fast-svg [name]="icon" size="28" />
      }
    </section>

    <section class="container card-grid">
      <article class="pb-card">
        <h2 class="pb-card-title">Lazy by default</h2>
        <p class="pb-card-body">
          Each icon is fetched only when it scrolls into view, through the
          browser's own <code>loading="lazy"</code>. Nothing to configure.
        </p>
        <a class="pb-btn pb-btn-tertiary" routerLink="/demo/features/lazy-loading">
          See it work <span class="pb-arrow">→</span>
        </a>
      </article>
      <article class="pb-card">
        <h2 class="pb-card-title">Cached once, used everywhere</h2>
        <p class="pb-card-body">
          An SVG is parsed into the DOM a single time. Every
          <code>&lt;fast-svg&gt;</code> references it with <code>&lt;use&gt;</code>,
          so a hundred icons cost one fetch.
        </p>
        <a class="pb-btn pb-btn-tertiary" routerLink="/docs/how-it-works">
          How it works <span class="pb-arrow">→</span>
        </a>
      </article>
      <article class="pb-card">
        <h2 class="pb-card-title">SSR and hydration ready</h2>
        <p class="pb-card-body">
          On the server the cache is rendered into the page. The client hydrates
          it and makes zero icon requests. This site is built that way.
        </p>
        <a class="pb-btn pb-btn-tertiary" routerLink="/docs/ssr">
          Set up SSR <span class="pb-arrow">→</span>
        </a>
      </article>
    </section>

    <section class="container card-grid card-grid--links">
      <a class="pb-card pb-card--link" routerLink="/docs">
        <h2 class="pb-card-title">Documentation</h2>
        <p class="pb-card-body">Install, configure, load strategies, SSR, API.</p>
      </a>
      <a class="pb-card pb-card--link" routerLink="/demo/compare">
        <h2 class="pb-card-title">Compare libraries</h2>
        <p class="pb-card-body">
          Render the same icons with six Angular icon libraries and profile them.
        </p>
      </a>
      <a class="pb-card pb-card--link" routerLink="/demo/features">
        <h2 class="pb-card-title">Feature showcase</h2>
        <p class="pb-card-body">Sizing, suspense, lazy loading, viewBox, strategies.</p>
      </a>
    </section>
  `,
  imports: [RouterLink, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly icons = SUPPORTED_ICONS;
}
