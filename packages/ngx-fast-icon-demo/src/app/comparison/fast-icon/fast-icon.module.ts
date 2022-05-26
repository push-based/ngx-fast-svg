import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';
import { FastIconRouteComponent } from './fast-icon.component';

@NgModule({
  declarations: [FastIconRouteComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FastIconRouteComponent,
      },
    ]),
    CommonModule,
    FastSvgModule,
  ],
})
export class FastIconRouteModule {}
