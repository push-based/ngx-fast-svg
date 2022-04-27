import { Component } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';

@Component({
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss'],
})
export class IonicComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(
      SUPPORTED_ICONS.map((i) => `assets/svg-icons/${i}.svg`)
    );
  }
}
