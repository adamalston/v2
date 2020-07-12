import React from 'react';
// import logo from './profile.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import registerIcons from './fontawesome.js';
registerIcons();

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h4>Adam Alston</h4>

				<div>
					<span className="bubble">
						<a href="https://github.com/adamalston" target="_blank " rel="noopener noreferrer">
							<FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x"/>
							<span className="icon_title">Github</span>
						</a>
					</span>

					<span className="bubble">
						<a href="https://www.linkedin.com/in/adammalston/" target="_blank " rel="noopener noreferrer">
							<FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} size="2x"/>
							<span className="icon_title">LinkedIn</span>
						</a>
					</span>

					<span className="bubble">
						<a href="resume.pdf" target="_blank " rel="noopener noreferrer">
							<FontAwesomeIcon className="icon" icon={['fas', 'file-alt']} size="2x"/>
							<span className="icon_title">Resume</span>
						</a>
					</span>

					<span className="bubble">
						<a href="mailto:aalston9@gmail.com" target="_blank " rel="noopener noreferrer">
							<div className="temp">
								<FontAwesomeIcon className="icon" icon={['fas', 'envelope']} size="2x"/>
								<span className="icon_title">Email</span>
							</div>
						</a>
					</span>

				</div>

			</header>
		</div>
	);
}

export default App;
