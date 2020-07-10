import React from 'react';
// import logo from './profile.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h4>Adam Alston</h4>
				{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> */}
				<div>
					<a title="GitHub" href="https://github.com/adamalston" target="_blank " rel="noopener noreferrer">
						<FontAwesomeIcon icon={['fab', 'github']} />
					</a>
					<a title="LinkedIn" href="https://www.linkedin.com/in/adammalston/" target="_blank " rel="noopener noreferrer">
						<FontAwesomeIcon icon={['fab', 'linkedin']} />
					</a>
					<a title="Resume" href="resume.pdf" target="_blank " rel="noopener noreferrer">
						<FontAwesomeIcon icon={['fas', 'file-alt']} />
					</a>
					<a title="Email" href="mailto:aalston9@gmail.com" target="_blank " rel="noopener noreferrer">
						<FontAwesomeIcon icon={['fa', 'paper-plane']} />
					</a>
				</div>
			</header>
		</div>
	);
}

export default App;
