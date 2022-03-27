import { Themes } from 'types';

const themes: Themes = {
  dark: {
    key: 'dark',
    primaryTextColor: '#fff',
    secondaryTextColor: '#ccc',
    tertiaryTextColor: '#999',
    background: '#000',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  light: {
    key: 'light',
    primaryTextColor: '#000',
    secondaryTextColor: '#333',
    tertiaryTextColor: '#777',
    background: '#fff',
    shadowColor: 'rgba(255, 255, 255, 0.5)',
  },
};

export default themes;
