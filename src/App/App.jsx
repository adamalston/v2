import React from 'react';
import { Toggle, Content, Buttons, Footer, Particles } from './../components';
import './../index.scss';

const App = () => {
  return (
    <React.StrictMode>
      <div className='app'>
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </div>
    </React.StrictMode>
  );
};

export default App;
