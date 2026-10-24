import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

@Component({
  selector: 'docs-root',
  template: `
    <docs-shell>
      <router-outlet />
    </docs-shell>
  `,
  imports: [ShellComponent, RouterOutlet],
})
export class AppComponent {}
