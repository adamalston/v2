import React, { createContext, useReducer } from 'react';

import themes from 'appearance/themeOptions';

const initialState = {
  config: {},
  isMobile: false,
  theme: themes.dark,
  setTheme: () => {},
};

const actions = { SET_THEME: 'SET_THEME' };

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...state, theme: themes[action.value] };
    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ config, isMobile, children }) => {
  initialState.config = config;
  initialState.isMobile = isMobile;

  const supportedThemes = Object.keys(themes);
  const localStorageTheme = localStorage.getItem('theme');

  if (supportedThemes.includes(localStorageTheme)) {
    initialState.theme = themes[localStorageTheme];
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    config: state.config,
    isMobile: state.isMobile,
    theme: state.theme,
    setTheme: (value) => {
      dispatch({ type: actions.SET_THEME, value });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
