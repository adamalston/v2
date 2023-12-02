import { DARK, LIGHT } from './../constants';
import { Themes } from 'types';

export const themes: Themes = {
  [DARK]: {
    key: DARK,
    primaryTextColor: '#fff',
    secondaryTextColor: '#ccc',
    tertiaryTextColor: '#999',
    background: '#000',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  [LIGHT]: {
    key: LIGHT,
    primaryTextColor: '#000',
    secondaryTextColor: '#333',
    tertiaryTextColor: '#777',
    background: '#fff',
    shadowColor: 'rgba(255, 255, 255, 0.5)',
  },
};
