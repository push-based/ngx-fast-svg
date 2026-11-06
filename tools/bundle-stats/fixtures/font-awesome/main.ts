/**
 * Baseline + @fortawesome/angular-fontawesome. Font Awesome has no file-based
 * mode: every icon is a JavaScript definition bundled into the app, so this
 * fixture imports 21 of them from the free solid set.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faBriefcase,
  faCalendarDays,
  faChalkboardUser,
  faCircleUser,
  faComments,
  faFaceSadTear,
  faFilm,
  faFire,
  faGears,
  faGlobe,
  faGraduationCap,
  faHeart,
  faLightbulb,
  faMagnifyingGlass,
  faPlay,
  faScrewdriverWrench,
  faStar,
  faTrash,
  faTriangleExclamation,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { COMMON_PROVIDERS } from '../common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon.iconName) {
        <li><fa-icon [icon]="icon" /></li>
      }
    </ul>
  `,
  imports: [FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = [
    faCircleUser,
    faArrowLeft,
    faFilm,
    faPlay,
    faFire,
    faMagnifyingGlass,
    faStar,
    faCalendarDays,
    faGlobe,
    faTrash,
    faFaceSadTear,
    faTriangleExclamation,
    faComments,
    faChalkboardUser,
    faGraduationCap,
    faScrewdriverWrench,
    faUsers,
    faBriefcase,
    faLightbulb,
    faGears,
    faHeart,
  ];
}

void bootstrapApplication(AppComponent, { providers: [...COMMON_PROVIDERS] });
