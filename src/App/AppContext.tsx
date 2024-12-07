import { createContext, Dispatch, ReactNode, useReducer } from 'react';

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

const actions = { SET_THEME: 'SET_THEME' } as const;

interface AppAction {
  type: typeof actions.SET_THEME;
  value: string;
}

type AppState = AppContextInterface;

const initialState: AppState = {
  config: {} as Config,
  isMobile: false,
  theme: themes.dark,
  setTheme: () => undefined,
};

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...state, theme: themes[action.value] };
  }
};

export const AppContext = createContext(initialState);

export const AppProvider = ({
  config,
  isMobile,
  children,
}: AppProviderInterface & { children: ReactNode }) => {
  initialState.config = config;
  initialState.isMobile = isMobile;

  const supportedThemes = Object.keys(themes);
  const localStorageTheme = localStorage.getItem('theme');
  if (localStorageTheme && supportedThemes.includes(localStorageTheme)) {
    initialState.theme = themes[localStorageTheme];
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const value: AppContextInterface = {
    config: state.config,
    isMobile: state.isMobile,
    theme: state.theme,
    setTheme: (value) => {
      dispatch({ type: actions.SET_THEME, value });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
