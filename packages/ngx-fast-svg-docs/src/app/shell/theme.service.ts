import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Light/dark theme. index.html applies the initial value before first paint
 * (saved preference, else the system setting); this service keeps the
 * attribute, the saved preference and the system setting in sync afterwards.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>('light');

  constructor() {
    if (!this.isBrowser) {
      return;
    }
    const current = this.document.documentElement.getAttribute('data-theme');
    this.theme.set(current === 'dark' ? 'dark' : 'light');

    // Follow the system while the user has not picked a theme.
    const media = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)');
    media?.addEventListener('change', (e) => {
      if (!this.saved()) {
        this.apply(e.matches ? 'dark' : 'light');
      }
    });
  }

  toggle() {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable; the choice lasts for this page
    }
  }

  private apply(theme: Theme) {
    this.theme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  private saved(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
