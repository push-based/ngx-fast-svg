import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicComponent } from './ionic.component';

@NgModule({
  declarations: [IonicComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: IonicComponent,
      },
    ]),
  ],
})
export class IonicComponentModule {}
