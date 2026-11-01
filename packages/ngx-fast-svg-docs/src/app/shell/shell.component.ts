import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeService } from './theme.service';

export const GITHUB_URL = 'https://github.com/push-based/ngx-fast-svg';
export const NPM_URL = 'https://www.npmjs.com/package/@push-based/ngx-fast-svg';
/** Links to push-based.io carry UTM parameters so the visits are attributed to these docs. */
export const PUSH_BASED_URL =
  'https://push-based.io/?utm_source=ngx-fast-svg&utm_medium=docs&utm_campaign=ngx-fast-svg-docs&utm_content=footer';

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
          <a
            class="site-nav__link site-nav__icon-link"
            [href]="GITHUB_URL"
            target="_blank"
            rel="noopener"
            aria-label="GitHub repository"
            title="GitHub"
          >
            <svg class="site-nav__icon" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              />
            </svg>
          </a>
          <a
            class="site-nav__link site-nav__icon-link"
            [href]="NPM_URL"
            target="_blank"
            rel="noopener"
            aria-label="npm package"
            title="npm"
          >
            <svg class="site-nav__icon site-nav__icon--npm" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
              />
            </svg>
          </a>
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
        <a [href]="PUSH_BASED_URL" target="_blank" rel="noopener" class="site-footer__brand">
          <img src="pushbased-logo.svg" alt="PushBased" height="32" />
        </a>
        <p class="text-body-sm site-footer__text">
          Built by <a [href]="PUSH_BASED_URL" target="_blank" rel="noopener">push-based.io</a>.
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
  protected readonly PUSH_BASED_URL = PUSH_BASED_URL;
}
