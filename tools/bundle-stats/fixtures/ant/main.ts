/**
 * Baseline + @ant-design/icons-angular. Like Font Awesome, Ant Design ships
 * icons as JavaScript definitions, so this fixture registers 21 of them.
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { IconDirective, IconService } from '@ant-design/icons-angular';
import {
  ArrowLeftOutline,
  BulbOutline,
  CalendarOutline,
  CommentOutline,
  DeleteOutline,
  FireOutline,
  FrownOutline,
  GlobalOutline,
  HeartOutline,
  PlayCircleOutline,
  ProjectOutline,
  ReadOutline,
  SearchOutline,
  SettingOutline,
  StarOutline,
  TeamOutline,
  ToolOutline,
  TrophyOutline,
  UserOutline,
  VideoCameraOutline,
  WarningOutline,
} from '@ant-design/icons-angular/icons';

const ICONS = [
  UserOutline,
  ArrowLeftOutline,
  VideoCameraOutline,
  PlayCircleOutline,
  FireOutline,
  SearchOutline,
  StarOutline,
  CalendarOutline,
  GlobalOutline,
  DeleteOutline,
  FrownOutline,
  WarningOutline,
  CommentOutline,
  ReadOutline,
  TrophyOutline,
  ToolOutline,
  TeamOutline,
  ProjectOutline,
  BulbOutline,
  SettingOutline,
  HeartOutline,
];

import { COMMON_PROVIDERS } from '../common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      @for (icon of icons; track icon) {
        <li><i antIcon [type]="icon"></i></li>
      }
    </ul>
  `,
  imports: [IconDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly icons = ICONS.map((icon) => icon.name);

  constructor() {
    inject(IconService).addIcon(...ICONS);
  }
}

void bootstrapApplication(AppComponent, { providers: [...COMMON_PROVIDERS] });
