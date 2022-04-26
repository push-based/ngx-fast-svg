import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [AngularComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AngularComponent,
      },
    ]),
  ],
})
export class AngularModule {}
