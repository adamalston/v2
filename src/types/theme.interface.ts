interface Theme {
  key: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  tertiaryTextColor: string;
  background: string;
  shadowColor: string;
}

interface Themes {
  [key: string]: Theme;
}

export { Theme, Themes };
