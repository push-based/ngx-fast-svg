import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

@Component({
  standalone: true,
  imports: [ShellComponent, RouterOutlet],
  selector: 'app-root',
  template: `
    <app-shell [sections]='sections'>
      <router-outlet />
    </app-shell>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly sections = [
    {
      title: 'Description',
      link: '/description'
    }
  ];

}
