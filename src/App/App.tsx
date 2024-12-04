import { useEffect, useState } from 'react';

import './App.scss';
import { AppProvider } from './AppContext';
import { Buttons, Content, Footer, Particles, Toggle } from 'components';
import { config } from './config';

export const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const init = () => {
      const matchesMobileQuery = window.matchMedia(
        '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)',
      )?.matches;

      setIsMobile(matchesMobileQuery);
      setIsReady(true);
    };

    if (!isReady) init();
  }, [isReady]);

  return isReady ? (
    <AppProvider config={config} isMobile={isMobile}>
      <main className="app">
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </main>
    </AppProvider>
  ) : (
    <div>Loading...</div>
  );
};
