import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  iconUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'assets/svg-icons/account.svg'
  );
  readonly icons: string[] = [
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
    'account',
  ];

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIcon('account', this.iconUrl);
  }

  lists: string[][] = [];

  add() {
    for (let i = 0; i < 30; i++) {
      this.lists.push(this.icons);
    }
  }
}
