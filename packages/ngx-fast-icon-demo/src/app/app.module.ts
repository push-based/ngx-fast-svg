import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ngx-fast-icon'
      },
      {
        path: 'ngx-fast-icon',
        loadChildren: () => import('./comparison/ngx-fast-svg/fast-svg-list.module').then(m => m.FastSvgListModule)
      },
      {
        path: 'icon',
        loadChildren: () => import('./comparison/angular-svg-icon/angular-svg-icon-list.module').then(m => m.AngularSvgIconListModule)
      }
      /* {
        path:'angular-material-icon',
        loadChildren: () => import('./angular-material-icons-list/angular-material-icons-list.module').then(m => m.AngularMaterialIconListModule)
      },*/
    ], { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
