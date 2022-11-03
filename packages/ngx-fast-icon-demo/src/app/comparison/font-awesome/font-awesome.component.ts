import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';

@Component({
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss'],
})
export class FontAwesomeComponent {
  constructor(public tester: IconTester) {
    this.tester.defineSet([
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
      faCircleUser,
    ]);
  }
}
