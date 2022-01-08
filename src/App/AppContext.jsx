import React, { createContext } from 'react';

import config from './config';
import usePersistentState from './../hooks/PersistentState';
import { dark, light } from './../themes/Theme';

export const AppContext = createContext({
  isDark: Boolean,
  setIsDark: () => {},
});

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = usePersistentState('theme', true); // default: dark mode
  const theme = isDark ? dark : light;
  const isMobile = window.matchMedia(
    '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)'
  )?.matches;

  const value = { config, isDark, setIsDark, theme, isMobile };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
