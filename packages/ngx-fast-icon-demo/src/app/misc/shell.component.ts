import { Component, inject, Input, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { IonicModule } from '@ionic/angular';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { BASE_ROUTE, DEMO_ROUTE } from './constants';
import { IconTester } from './icon-tester.service';

@Component({
    selector: 'app-shell',
    template: `
    <div class='root' [class]='rootClass'>
      <mat-toolbar class='header-toolbar' [class.header-is-mobile]='isMobile'>
        <a (click)='sideNav.toggle()'>
          <fast-svg id='nav-icon' height='48' width='48' name='menu' />
        </a>
        <h1 class='title'>ngx-fast-svg</h1>
      </mat-toolbar>
      <div class='row'>
        <mat-sidenav-container [style.marginTop.px]='isMobile ? 56 : 0'>
          <mat-sidenav mode='side' [opened]='!isMobile' [fixedInViewport]='isMobile' fixedTopGap='56'>
            <div class='sidebar'>
              <div class='header'>
                <a
                  class='link'
                  [routerLinkActive]="'active'"
                  [class]='BASE_ROUTE'
                  [routerLink]='[BASE_ROUTE]'
                >{{ BASE_ROUTE }}</a>
                @for (demo of DEMO_ROUTES; track $index) {
                  <a
                    class='link'
                    [routerLinkActive]="'active'"
                    [class]='demo'
                    [routerLink]='[demo,tester.activeLayoutSetting(),tester.iconListCount()]'
                  >{{ demo }}</a>
                }
              </div>
            </div>
          </mat-sidenav>
          <mat-sidenav-content>
            <div class='content'>
              <ng-content />
            </div>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </div>
    </div>
  `,
    styles: [`
    .title {
      margin: auto;
      font-size: x-large;
    }

    .header {
      position: relative;
      z-index: 1090;
      border-right: 3px solid;
      height: 100%;
      transition: border-color 0.2s ease-in-out;
    }

    .header-toolbar {
      border-bottom: 3px solid rgba(128, 128, 128, 0.3);
    }

    .header-is-mobile.header-toolbar {
      position: fixed;
      z-index: 2;
      background: inherit;
    }

    .mat-drawer-container {
      width: 100%;
    }

    .link {
      padding: 16px;
      display: block;
      transition: background-color 0.2s ease-in-out;
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      background: none !important;

      &.active {
        &.description {
          background-color: var(--description-border-color) !important;
        }
        &.angular {
          background-color: var(--angular-border-color) !important;
        }
        &.ant {
          background-color: var(--ant-border-color) !important;
        }
        &.ionic {
          background-color: var(--ionic-border-color) !important;
        }
        &.font-awesome {
          background-color: var(--font-awesome-border-color) !important;
        }
        &.fast-svg {
          background-color: var(--pb-border-color) !important;
        }
        &.material {
          background-color: var(--material-border-color) !important;
        }
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
    }

    .sidebar {
      width: 175px;
      height: 100%;
    }

    .content {
      height: 100%;
      overflow: auto;
      padding: 0 16px;
    }

    :host::ng-deep {
      .angular {
        background-color: var(--angular-color);

        button {
          background-color: var(--angular-border-color);

          &.active {
            background: transparent;
            border: 2px solid var(--angular-border-color);
          }
        }
      }
      .description {
        background-color: var(--description-color);
      }
      .ant {
        background-color: var(--ant-color);

        button {
          background-color: var(--ant-border-color);

          &.active {
            background: transparent;
            border: 2px solid var(--ant-border-color);
          }
        }
      }
      .ionic {
        background-color: var(--ionic-color);

        button {
          background-color: var(--ionic-border-color);

          &.active {
            background: transparent;
            border: 2px solid var(--ionic-border-color);
          }
        }
      }
      .font-awesome {
        background-color: var(--font-awesome-color);

        button {
          background-color: var(--font-awesome-border-color);

          &.active {
            background: transparent;
            border: 2px solid var(--font-awesome-border-color);
          }
        }
      }
      .fast-svg {
        background-color: var(--pb-color);

        button {
          background-color: var(--pb-border-color);

          &.active {
            background: transparent;
            border: 2px solid var(--pb-border-color);
          }
        }
      }
      #nav-icon > .fast-svg {
        background-color: transparent;
        margin-top: 10px;
      }
      .material {
        background-color: var(--material-color);

        button {
          background-color: var(--material-border-color);

          &.active {
            background: transparent;
            border: 2px solid var(--material-border-color);
          }
        }
      }
    }

    button {
      border: 2px solid transparent;
    }

    :host::ng-deep .root {
      height: 100%;
      overflow: auto;
      width: 100%;
      transition: background-color 0.2s ease-in-out;

      &.angular {
        .header {
          border-right-color: var(--angular-border-color);
        }
      }
      &.description {
        .header {
          border-right-color: var(--description-border-color);
        }
      }
      &.ant {
        .header {
          border-right-color: var(--ant-border-color);
        }
      }
      &.ionic {
        .header {
          border-right-color: var(--ionic-border-color);
        }
      }
      &.font-awesome {
        .header {
          border-right-color: var(--font-awesome-border-color);
        }
      }
      &.fast-svg {
        .header {
          border-right-color: var(--pb-border-color);
        }
      }
      &.material {
        .header {
          border-right-color: var(--material-border-color);
        }
      }
    }
  `],
    imports: [
        AsyncPipe,
        FastSvgComponent,
        IonicModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatDividerModule
    ]
})
export class ShellComponent {
  @Input({required: true}) rootClass!: string | string[];
  @Input({required: true}) isMobile!: boolean;
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  readonly tester = inject(IconTester);

  readonly DEMO_ROUTES = Object.values(DEMO_ROUTE);
  readonly BASE_ROUTE = BASE_ROUTE;
}
