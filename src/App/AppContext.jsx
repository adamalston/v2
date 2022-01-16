import React, { createContext } from 'react';

import config from './config';
import usePersistentState from 'hooks/PersistentState';
import { dark, light } from 'themes/Theme';

const AppContext = createContext({
  isDark: Boolean,
  setIsDark: () => {},
});

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = usePersistentState('theme', true); // default: dark mode
  const theme = isDark ? dark : light;
  const isMobile = window.matchMedia(
    '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)'
  )?.matches;

  const value = { config, theme, isDark, setIsDark, isMobile };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
