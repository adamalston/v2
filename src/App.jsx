import React from 'react';
import './stylesheets/_index.scss';
import ThemeToggle from './components/Toggle'
import Content from './components/Content'
import Buttons from './components/Buttons';
import Particle from './components/Particles';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <ThemeToggle />
            <Content />
            <Buttons />
            <Particle />
            <Footer />
        </div>
    );
}

export default App;
