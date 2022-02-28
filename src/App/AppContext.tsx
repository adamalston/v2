import React, { createContext, Dispatch, useReducer } from 'react';

import { themes } from 'appearance';
import { Config, Theme } from 'types';

interface AppProviderInterface {
  config: Config;
  isMobile: boolean;
}

interface AppContextInterface extends AppProviderInterface {
  theme: Theme;
  setTheme: Dispatch<string>;
}

const initialState: AppContextInterface = {
  config: {} as Config,
  isMobile: false,
  theme: themes.dark,
  setTheme: () => {},
};

const actions = { SET_THEME: 'SET_THEME' };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...state, theme: themes[action.value] };
    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider: React.FC<AppProviderInterface> = ({
  config,
  isMobile,
  children,
}) => {
  initialState.config = config;
  initialState.isMobile = isMobile;

  const supportedThemes: string[] = Object.keys(themes);
  const localStorageTheme: string | null = localStorage.getItem('theme');
  if (localStorageTheme && supportedThemes.includes(localStorageTheme)) {
    initialState.theme = themes[localStorageTheme];
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    config: state.config,
    isMobile: state.isMobile,
    theme: state.theme,
    setTheme: (value: string) => {
      dispatch({ type: actions.SET_THEME, value });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, reducer };
