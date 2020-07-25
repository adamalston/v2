import React, { Component } from 'react';
import Buttons from './Buttons';
// import logo from './profile.png';

class Header extends Component {
    render() {
        return (
            <div className="container">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1 className="name" aria-label="My name is Adam Alston">Adam Alston</h1>
                <h2 className="title" aria-label="I am a software developer and engineer">Software Engineer</h2>

                {/* <p>I'm passionate about energy, space, and technology. If I'm not working on a project, you'll usually find me on a soccer field.</p>
                <p>I have just completed my B.S. in Computer Science at the University of North Carolina - Chapel Hill.</p>
                <p>If you're interested in what I'm working on now or what I've done in the past, be sure to check out my resume and the other links below.</p> */}
                <Buttons />
            </div>
        )
    }
}

export default Header;