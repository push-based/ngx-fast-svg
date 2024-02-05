import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SUPPORTED_ICONS } from '../../icon-data';
import { IconTester } from '../../misc/icons-tester/icon-tester.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ControllerComponent } from '../../misc/controller.component';

@Component({
  template: `
    <app-controller [demoLib]='"Material icon"' [tester]='tester'/>
    <div class='row icons' [ngClass]='tester.layout | async'>
      @for (list of (tester.lists | async); track $index) {
        <ul class="group">
          @for (icon of list; track $index) {
            <li>
              <mat-icon class='mat-icon-rtl-mirror' [svgIcon]='icon' />
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
    IonicModule,
    ControllerComponent
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
