import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IconModule as AntIconsModule } from '@ant-design/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';
import { FastIconModule } from '@ngx-fast-icon';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularComponent } from './routes/angular/angular.component';
import { IonicComponent } from './routes/ionic/ionic.component';
import { FastIconRouteComponent } from './routes/fast-icon/fast-icon.component';
import { AntComponent } from './routes/ant/ant.component';
import { FontAwesomeComponent } from './routes/font-awesome/font-awesome.component';
import { MaterialComponent } from './routes/material/material.component';
import { DescriptionComponent } from './routes/description/description.component';
@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    IonicComponent,
    FastIconRouteComponent,
    AntComponent,
    FontAwesomeComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    AntIconsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule,
    AngularSvgIconModule.forRoot(),
    IonicModule.forRoot(),
    FastIconModule.forRoot({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
    }),
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'description',
        },
        {
          path: 'ngx-fast-icon',
          loadChildren: () =>
            import('./comparison/ngx-fast-svg/fast-svg-list.module').then(
              (m) => m.FastSvgListModule
            ),
        },
        {
          path: 'icon',
          loadChildren: () =>
            import(
              './comparison/angular-svg-icon/angular-svg-icon-list.module'
            ).then((m) => m.AngularSvgIconListModule),
        },
        {
          path: 'description',
          component: DescriptionComponent,
        },
        {
          path: 'angular',
          component: AngularComponent,
        },
        {
          path: 'material',
          component: MaterialComponent,
        },
        {
          path: 'ant',
          component: AntComponent,
        },
        {
          path: 'ionic',
          component: IonicComponent,
        },
        {
          path: 'font-awesome',
          component: FontAwesomeComponent,
        },
        {
          path: 'fast-icon',
          component: FastIconRouteComponent,
        },
        /* {
        path:'angular-material-icon',
        loadChildren: () => import('./angular-material-icons-list/angular-material-icons-list.module').then(m => m.AngularMaterialIconListModule)
      },*/
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
