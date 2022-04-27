import { Component } from '@angular/core';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
@Component({
  templateUrl: './fast-icon.component.html',
  styleUrls: ['./fast-icon.component.scss'],
})
export class FastIconRouteComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet(SUPPORTED_ICONS);
  }
}
