import { Themes } from 'types';

// Enhance contrast by using white and black text with reduced opacity over
// colored backgrounds instead of gray.
// https://m2.material.io/design/color/text-legibility.html#text-backgrounds
export const themes: Themes = {
  dark: {
    key: 'dark',
    primaryTextColor: '#fff',
    secondaryTextColor: '#ffffffdd',
    tertiaryTextColor: '#ffffff99',
    background: '#000',
    shadowColor: '#0000007f',
  },
};
