import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { FastIconRouteComponent } from './fast-icon.component';
import { ControllerComponent } from '../../misc/controller.component';

@NgModule({
  declarations: [FastIconRouteComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FastIconRouteComponent
      }
    ]),
    CommonModule,
    FastSvgComponent,
    ControllerComponent
  ]
})
export class FastIconRouteModule {}
