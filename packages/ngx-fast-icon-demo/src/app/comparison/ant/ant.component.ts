import { Component } from '@angular/core';
import { IconService as AntIconService } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
import { AllIcons } from './icons';
@Component({
  templateUrl: './ant.component.html',
  styleUrls: ['./ant.component.scss'],
})
export class AntComponent {
  constructor(private _iconService: AntIconService, public tester: IconTester) {
    this.tester.defineSet(SUPPORTED_ICONS);
    console.log(AccountBookFill);
    this._iconService.addIcon(...(AllIcons as any));
  }
}
