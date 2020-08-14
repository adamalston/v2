import React from 'react';
import './stylesheets/_index.scss';
import ThemeToggle from './components/Toggle'
import Content from './components/Content'
import Buttons from './components/Buttons';
import Particle from './components/Particles';

function App() {
    return (
        <div className="App">
            <ThemeToggle />
            <Content />
            <Buttons />
            <Particle />
        </div>
    );
}

export default App;
