import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Content, Buttons, Footer, Particles } from './components/'


ReactDOM.render(
    <React.StrictMode>
        <div className='app'>
            <Content />
            <Buttons />
            <Footer />
            <Particles />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
