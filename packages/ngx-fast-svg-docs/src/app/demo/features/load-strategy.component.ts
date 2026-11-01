import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal } from '@angular/core';

import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { SVG_ICON_BASE } from '../../core/svg-url';
import { CodeBoxComponent } from './code-box.component';
import { DemoSettings } from './demo-settings.service';
import { FeaturePageComponent } from './feature-page.component';
import { ResourceLogComponent } from './resource-log.component';

const ICONS = ['account', 'back', 'play', 'search', 'upcoming', 'website'];
const LATENCIES = [0, 1000, 3000];
const BASE_PATHS = [SVG_ICON_BASE, 'assets/missing-folder'];

@Component({
  template: `
    <docs-feature-page
      title="Load strategy"
      lead="This site's strategy reads its base path and an artificial latency from signals. Change them, mount a fresh batch, and watch the URLs and timings."
    >
      <section class="feature-example">
        <div class="feature-example__toolbar">
          <label class="pb-field feature-example__field">
            <span class="pb-field-label">Base path (config)</span>
            <select class="pb-input" [value]="settings.basePath()" (change)="setBase($event)">
              @for (base of basePaths; track base) {
                <option [value]="base">{{ base }}</option>
              }
            </select>
          </label>
          <label class="pb-field feature-example__field">
            <span class="pb-field-label">Latency (load)</span>
            <select class="pb-input" [value]="settings.latencyMs()" (change)="setLatency($event)">
              @for (ms of latencies; track ms) {
                <option [value]="ms">{{ ms }} ms</option>
              }
            </select>
          </label>
          <button type="button" class="pb-btn pb-btn-primary" (click)="mount()">Mount icons</button>
        </div>
        <div class="feature-example__stage feature-example__stage--row">
          @if (run(); as run) {
            @for (icon of icons; track icon) {
              <fast-svg [name]="'strategy' + run + '/' + icon" size="40" />
            }
          } @else {
            <p class="text-body-sm feature-example__placeholder">Pick settings, then mount.</p>
          }
        </div>
        <docs-resource-log match="scope=strategy" />
      </section>

      <section class="feature-notes prose">
        <h2>Two methods</h2>
        <p>
          <code>config(url)</code> turns the value of your <code>url</code> option into the final
          URL and may be asynchronous: here it reads the base path from a signal. With the missing
          folder the requests fail and the icons keep the suspense placeholder.
          <code>load(url$)</code> fetches the markup: here it is the default strategy plus a delay.
        </p>
        <docs-code-box snippet="custom-strategy.ts" title="svg-load.strategies.ts" />
        <docs-code-box snippet="lazy-config.ts" title="a lazy configuration" />
      </section>
    </docs-feature-page>
  `,
  imports: [FeaturePageComponent, CodeBoxComponent, ResourceLogComponent, FastSvgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadStrategyComponent implements OnDestroy {
  protected readonly settings = inject(DemoSettings);
  protected readonly icons = ICONS;
  protected readonly latencies = LATENCIES;
  protected readonly basePaths = BASE_PATHS;
  protected readonly run = signal(0);

  mount() {
    this.run.update((r) => r + 1);
  }

  setBase(event: Event) {
    this.settings.basePath.set((event.target as HTMLSelectElement).value);
  }

  setLatency(event: Event) {
    this.settings.latencyMs.set(Number((event.target as HTMLSelectElement).value));
  }

  ngOnDestroy() {
    this.settings.reset();
  }
}
