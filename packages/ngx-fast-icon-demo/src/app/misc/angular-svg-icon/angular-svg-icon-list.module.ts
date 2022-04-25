import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconListComponent } from './angular-svg-icon-list.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AngularSvgIconListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AngularSvgIconListComponent
      }
    ])
  ]
})
export class AngularSvgIconListModule {

}
