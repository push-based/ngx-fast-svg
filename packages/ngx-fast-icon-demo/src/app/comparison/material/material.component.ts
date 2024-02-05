import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  template: `
    <h1>Material icon demo</h1>
    <h4>Layout setting</h4>
    <div class="buttons-wrapper">
      @for (button of tester.buttons; track $index) {
        <button
          [ngClass]="{ active: button === (tester.setting | async)}"
          (click)="tester.setLayout(button)"
        >{{ button }}</button>
      }
    </div>
    <h4>Content controls</h4>
    <div class="buttons-wrapper">
      <button (click)="tester.updateList(1)">Add</button>
      <button (click)="tester.updateList(-1)">Remove</button>
      <button (click)="tester.reload()">Reload page</button>
    </div>

    <div class='row icons' [ngClass]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class="group">
          @for (icon of list; track $index) {
            <li>
              <mat-icon class='mat-icon-rtl-mirror' [svgIcon]='icon'></mat-icon>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    .group {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    .mat-icon {
      width: 30px;
      height: 30px;
    }
  `],
  imports: [
    NgClass,
    AsyncPipe,
    MatIconModule,
    IonicModule
  ],
  standalone: true
})
export class MaterialComponent {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    public tester: IconTester
  ) {
    this.tester.defineSet(SUPPORTED_ICONS);
    SUPPORTED_ICONS.forEach((i) => {
      this.matIconRegistry.addSvgIcon(
        i,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg-icons/${i}.svg`
        )
      );
    });
  }
}
