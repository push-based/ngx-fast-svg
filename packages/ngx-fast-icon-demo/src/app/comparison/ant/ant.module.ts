import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AntComponent } from './ant.component';
import { IconModule as AntIconsModule } from '@ant-design/icons-angular';
import { ControllerComponent } from '../../misc/controller.component';

@NgModule({
  declarations: [AntComponent],
  imports: [
    CommonModule,
    AntIconsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AntComponent
      }
    ]),
    ControllerComponent
  ]
})
export class AntModule {}
