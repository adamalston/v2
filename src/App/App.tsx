import React, { useEffect, useState } from 'react';

import './App.scss';
import { AppProvider } from './AppContext';
import { Toggle, Content, Buttons, Footer, Particles } from 'components';
import config from './config';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const init = () => {
    if (
      window.matchMedia(
        '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)'
      )?.matches
    ) {
      setIsMobile(true);
    }

    // before the state refactoring, 'theme' had a boolean-ish ('true', 'false')
    // value in localStorage, now 'theme' has a theme value ('dark', 'light'),
    // to prevent the site from breaking, older 'theme' entries should be updated
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme === 'true') {
      localStorage.setItem('theme', 'dark');
    } else if (localStorageTheme === 'false') {
      localStorage.setItem('theme', 'light');
    }

    setIsReady(true);
  };

  useEffect(() => {
    if (!isReady) init();
  }, [isReady]);

  return isReady ? (
    <AppProvider config={config} isMobile={isMobile}>
      <div className="app">
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </div>
    </AppProvider>
  ) : (
    <></>
  );
};

export default App;
