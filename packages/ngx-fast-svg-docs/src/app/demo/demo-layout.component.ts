import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'docs-demo-layout',
  template: `
    <div class="container">
      <nav class="demo-tabs" aria-label="Demo sections">
        <a class="demo-tabs__link" routerLink="/demo/compare" routerLinkActive="active">Compare libraries</a>
        <a class="demo-tabs__link" routerLink="/demo/features" routerLinkActive="active">Features</a>
      </nav>
      <router-outlet />
    </div>
  `,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLayoutComponent {}
