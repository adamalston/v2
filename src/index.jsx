import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Toggle, Content, Buttons, Footer, Particles } from './components/'


ReactDOM.render(
    <React.StrictMode>
        <div className='app'>
            <Toggle />
            <Content />
            <Buttons />
            <Footer />
            <Particles />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
