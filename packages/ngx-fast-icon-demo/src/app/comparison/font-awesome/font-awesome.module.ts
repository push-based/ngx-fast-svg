import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeComponent } from './font-awesome.component';

@NgModule({
  declarations: [FontAwesomeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        component: FontAwesomeComponent,
      },
    ]),
  ],
})
export class FontAwesomeRouteModule {}
