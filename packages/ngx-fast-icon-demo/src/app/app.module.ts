import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from './routes/description/description.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FastSvgComponent, provideFastSVG } from '@push-based/ngx-fast-svg';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'description'
        },
        {
          path: 'ngx-fast-icon',
          loadChildren: () =>
            import('./misc/ngx-fast-svg/fast-svg-list.module').then(
              (m) => m.FastSvgListModule
            )
        },
        {
          path: 'icon',
          loadChildren: () =>
            import('./misc/angular-svg-icon/angular-svg-icon-list.module').then(
              (m) => m.AngularSvgIconListModule
            )
        },
        {
          path: 'description',
          component: DescriptionComponent
        },
        {
          path: 'angular',
          loadComponent: () =>
            import('./comparison/angular/angular.component').then(
              (c) => c.AngularComponent
            )
        },
        {
          path: 'material',
          loadComponent: () =>
            import('./comparison/material/material.component').then(
              (c) => c.MaterialComponent
            )
        },
        {
          path: 'ant',
          loadComponent: () =>
            import('./comparison/ant/ant.component').then((c) => c.AntComponent)
        },
        {
          path: 'ionic',
          loadComponent: () =>
            import('./comparison/ionic/ionic.component').then(
              (m) => m.IonicComponent
            )
        },
        {
          path: 'font-awesome',
          loadChildren: () =>
            import('./comparison/font-awesome/font-awesome.module').then(
              (m) => m.FontAwesomeRouteModule
            )
        },
        {
          path: 'fast-svg',
          loadComponent: () =>
            import('./comparison/fast-icon/fast-icon.component').then(
              (c) => c.FastIconRouteComponent
            )
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    FastSvgComponent
  ],
  providers: [
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
    // provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
