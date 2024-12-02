import { useEffect, useState } from 'react';

import './App.scss';
import { AppProvider } from './AppContext';
import { Buttons, Content, Footer, Particles } from 'components';
import { config } from './config';

export const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const init = () => {
    if (
      window.matchMedia(
        '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)',
      )?.matches
    ) {
      setIsMobile(true);
    }

    // before the state refactoring, 'theme' had a boolean-ish ('true', 'false')
    // value in localStorage, now 'theme' has a theme value ('dark', 'light'),
    // to prevent the site from breaking, older 'theme' entries should be updated
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme === 'true' || localStorageTheme === 'false') {
      localStorage.setItem('theme', 'dark');
    }

    setIsReady(true);
  };

  useEffect(init, []);

  return isReady ? (
    <AppProvider config={config} isMobile={isMobile}>
      <main className="app">
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </main>
    </AppProvider>
  ) : (
    <></>
  );
};
