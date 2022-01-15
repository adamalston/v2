import React from 'react';

import { AppProvider } from './AppContext';
import { Toggle, Content, Buttons, Footer, Particles } from 'components';
import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </div>
    </AppProvider>
  );
};

export default App;
