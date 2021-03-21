import React from 'react';
import { Toggle, Content, Buttons, Footer, Particles } from './../components';
import usePersistentState from './../hooks/PersistentState';
import './../index.scss';

const App = () => {
  const [isDark, setIsDark] = usePersistentState('theme', true);

  return (
    <React.StrictMode>
      <div className='app'>
        <Toggle isDark={isDark} setIsDark={setIsDark} />
        <Content />
        <Buttons />
        <Footer />
        <Particles isDark={isDark} />
      </div>
    </React.StrictMode>
  );
};

export default App;
