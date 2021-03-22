import React from 'react';
import usePersistentState from './../hooks/PersistentState';
import { Toggle, Content, Buttons, Footer, Particles } from './../components';
import './app.scss';

const App = () => {
  const [isDark, setIsDark] = usePersistentState('theme', true);

  return (
    <React.StrictMode>
      <div className='app'>
        <Toggle isDark={isDark} setIsDark={setIsDark} />
        <Content isDark={isDark} />
        <Buttons isDark={isDark} />
        <Footer isDark={isDark} />
        <Particles isDark={isDark} />
      </div>
    </React.StrictMode>
  );
};

export default App;
