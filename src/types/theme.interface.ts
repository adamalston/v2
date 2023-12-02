import { DARK, LIGHT } from './../constants';

export type Theme = typeof DARK | typeof LIGHT;

export interface ThemeConfig {
  key: Theme;
  primaryTextColor: string;
  secondaryTextColor: string;
  tertiaryTextColor: string;
  background: string;
  shadowColor: string;
}

export type Themes = {
  [key in Theme]: ThemeConfig;
};
