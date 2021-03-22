import React from 'react';

import { ThemeProvider } from './AppContext';
import { Toggle, Content, Buttons, Footer, Particles } from './../components';
import './app.scss';

const App = () => {
  return (
    <ThemeProvider>
      <div className='app'>
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </div>
    </ThemeProvider>
  );
};

export default App;
