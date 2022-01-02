import React from 'react';

import { ThemeProvider } from './AppContext';
import { Content, Buttons, Footer, Particles } from './../components';
import './app.scss';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </div>
    </ThemeProvider>
  );
};

export default App;
