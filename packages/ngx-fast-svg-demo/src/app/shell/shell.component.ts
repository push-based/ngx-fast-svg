import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ControllerComponent } from '../controller/controller.component';

@Component({
  selector: 'app-shell',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
          mode="over"
          opened="false">
        <mat-toolbar>Menu</mat-toolbar>
        @for (section of sections; track section.title) {
          <mat-nav-list>
            <a mat-list-item [href]="section.link">{{section.title}}</a>
          </mat-nav-list>
        }
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button type="button" aria-label="Toggle sidenav" mat-icon-button (click)="drawer.toggle()">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>ngx-fast-svg-demo</span>
        </mat-toolbar>
        <app-controller />
        <ng-content />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100%;
    }

    .sidenav {
      width: 200px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ControllerComponent
  ]
})
export class ShellComponent {
  @Input({required: true}) sections!: {title: string, link: string}[];
}
