import { createContext, Dispatch, ReactNode, useReducer } from 'react';

import { themes } from 'appearance';
import { Config, Theme } from 'types';
import { DARK, THEME } from './../constants';

interface AppProviderInterface {
  config: Config;
  isMobile: boolean;
}

interface AppContextInterface extends AppProviderInterface {
  theme: Theme;
  setTheme: Dispatch<Theme>;
}

const initialState: AppContextInterface = {
  config: {} as Config,
  isMobile: false,
  theme: DARK,
  setTheme: () => {},
};

const actions = { SET_THEME: 'SET_THEME' };

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...state, theme: action.value };
    default:
      return state;
  }
};

export const AppContext = createContext(initialState);

export const AppProvider = ({
  config,
  isMobile,
  children,
}: AppProviderInterface & { children: ReactNode }) => {
  // initialState.config = config;
  // initialState.isMobile = isMobile;

  // const supportedThemes: string[] = Object.keys(themes);
  // const localStorageTheme = localStorage.getItem(THEME);
  // if (localStorageTheme && supportedThemes.includes(localStorageTheme)) {
  //   initialState.theme = localStorageTheme as Theme;
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);

  const localStorageTheme = localStorage.getItem(THEME);
  const theme =
    localStorageTheme && themes.hasOwnProperty(localStorageTheme)
      ? (localStorageTheme as Theme)
      : initialState.theme;

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    config,
    isMobile,
    theme,
  });

  const value = {
    ...state,
    setTheme: (value: Theme) => {
      dispatch({ type: actions.SET_THEME, value });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
