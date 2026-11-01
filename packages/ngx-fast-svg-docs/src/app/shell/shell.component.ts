import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeService } from './theme.service';

export const GITHUB_URL = 'https://github.com/push-based/ngx-fast-svg';
export const NPM_URL = 'https://www.npmjs.com/package/@push-based/ngx-fast-svg';

@Component({
  selector: 'docs-shell',
  template: `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="brand" routerLink="/" aria-label="ngx-fast-svg home">
          <img class="brand__mark" src="logo.svg" alt="" width="32" height="32" />
          <span class="brand__name">ngx-fast-svg</span>
        </a>
        <nav class="site-nav" aria-label="Main">
          <a class="site-nav__link" routerLink="/docs" routerLinkActive="active">Docs</a>
          <a class="site-nav__link" routerLink="/demo" routerLinkActive="active">Demo</a>
          <a class="site-nav__link" [href]="GITHUB_URL" target="_blank" rel="noopener">GitHub</a>
          <a class="site-nav__link" [href]="NPM_URL" target="_blank" rel="noopener">npm</a>
          <button
            type="button"
            class="site-nav__link theme-toggle"
            (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
            [title]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            @if (theme.theme() === 'dark') {
              <svg class="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" />
              </svg>
            } @else {
              <svg class="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
              </svg>
            }
          </button>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <ng-content />
    </main>

    <footer class="site-footer">
      <div class="container site-footer__inner">
        <a href="https://push-based.io/" target="_blank" rel="noopener" class="site-footer__brand">
          <img src="pushbased-logo.svg" alt="PushBased" height="32" />
        </a>
        <p class="text-body-sm site-footer__text">
          Built by <a href="https://push-based.io/" target="_blank" rel="noopener">push-based.io</a>.
          Released under the MIT license.
        </p>
      </div>
    </footer>
  `,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly GITHUB_URL = GITHUB_URL;
  protected readonly NPM_URL = NPM_URL;
}
