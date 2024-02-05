import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { AngularSvgIconModule } from 'angular-svg-icon';

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
    AngularSvgIconModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'description'
        },
        {
          path: 'description',
          loadComponent: () => import('./misc/description.component').then((c) => c.DescriptionComponent)
        },
        {
          path: 'angular',
          loadComponent: () => import('./comparison/angular.component').then((c) => c.AngularComponent)
        },
        {
          path: 'material',
          loadComponent: () => import('./comparison/material.component').then((c) => c.MaterialComponent)
        },
        {
          path: 'ant',
          loadComponent: () => import('./comparison/ant.component').then((c) => c.AntComponent)
        },
        {
          path: 'ionic',
          loadComponent: () => import('./comparison/ionic.component').then((c) => c.IonicComponent)
        },
        {
          path: 'font-awesome',
          loadComponent: () => import('./comparison/font-awesome.component').then((c) => c.FontAwesomeComponent)
        },
        {
          path: 'fast-svg',
          loadComponent: () => import('./comparison/fast-icon.component').then((c) => c.FastIconRouteComponent)
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
