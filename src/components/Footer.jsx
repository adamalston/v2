import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <p className="footer-text" aria-label="Designed and built by Adam Alston">Designed and built by&nbsp;
                    <a className="footer-link" href="https://www.adamalston.com/">Adam Alston</a>
                </p>
            </div>
        )
    }
}

export default Footer;
