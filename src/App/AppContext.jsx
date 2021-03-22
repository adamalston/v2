import React, { createContext } from 'react';

import usePersistentState from './../hooks/PersistentState';

export const AppContext = createContext({
  isDark: Boolean,
  setIsDark: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = usePersistentState('theme', true); // default: dark mode

  return <AppContext.Provider value={{ isDark, setIsDark }}>{children}</AppContext.Provider>;
};
