export interface Theme {
  key: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  tertiaryTextColor: string;
  background: string;
  shadowColor: string;
}

export interface Themes {
  [key: string]: Theme;
}
