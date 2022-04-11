import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FastIconModule } from '@ngx-fast-icon';
import { FAST_ICON_PROVIDERS } from './ngx-fast-icon-setup/movie.icon.provider';
import { FastIconListComponent } from './fast-icon-list.component';
import { IconListComponent } from './icon-list.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, FastIconListComponent, IconListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'ngx-fast-icon'
      },
      {
        path:'ngx-fast-icon',
        component: FastIconListComponent
      },/*
      {
        path:'angular-material-icon',
        loadChildren: () => import('./angular-material-icons-list/angular-material-icons-list.module').then(m => m.AngularMaterialIconsListModule)
      },*/
      {
        path:'icon',
        component: IconListComponent
      },
    ], { initialNavigation: 'enabledBlocking' }),
    FastIconModule.forClient(),
    // MatIconModule,
   AngularSvgIconModule.forRoot()
  ],
  providers: [
    FAST_ICON_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
