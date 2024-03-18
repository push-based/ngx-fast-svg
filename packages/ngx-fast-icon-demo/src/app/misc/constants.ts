export const BASE_ROUTE = 'description';
export const DEMO_ROUTE = {
  FAST_SVG: 'fast-svg',
  MATERIAL: 'material',
  IONIC: 'ionic',
  FONT_AWESOME: 'font-awesome',
  ANGULAR: 'angular',
  ANT: 'ant'
} as const;

export const LAYOUT_SETTING = {
  ON_SCREEN: 'on-screen',
  OFF_SCREEN: 'off-screen',
  DISTRIBUTED: 'distributed'
} as const;
export type LayoutSetting = typeof LAYOUT_SETTING[keyof typeof LAYOUT_SETTING];

export const LAYOUT_SETTING_NAME = {
  [LAYOUT_SETTING.ON_SCREEN]: 'ON SCREEN',
  [LAYOUT_SETTING.OFF_SCREEN]: 'OFF SCREEN',
  [LAYOUT_SETTING.DISTRIBUTED]: 'DISTRIBUTED'
} as const;
