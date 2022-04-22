import { Component } from '@angular/core';
import {
  faCircleUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss'],
})
export class FontAwesomeComponent {
  readonly icons: IconDefinition[] = [
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
  ];

  lists: IconDefinition[][] = [];

  add() {
    for (let i = 0; i < 30; i++) {
      this.lists.push(this.icons);
    }
  }
}
