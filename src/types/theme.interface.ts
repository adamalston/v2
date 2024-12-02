export interface Theme {
  key: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  tertiaryTextColor: string;
  background: string;
  shadowColor: string;
}

export type Themes = Record<string, Theme>;
