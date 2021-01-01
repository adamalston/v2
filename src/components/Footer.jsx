import React, { Component } from 'react';

const isMobileDevice = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

const Source = () => <>&nbsp;|&nbsp;<a className='footer-link' href='https://github.com/adamalston/v2/tree/fireworks'>Source</a></>

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <p className='footer-text' aria-label='Designed and built by Adam Alston'>Designed and built by&nbsp;
                    <a className='footer-link' href='https://www.adamalston.com/'>Adam Alston</a>
                    {isMobileDevice ? '' : <Source />}
                </p>
            </div>
        )
    }
}

export default Footer;
