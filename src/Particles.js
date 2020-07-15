import React, { Component } from 'react';
import Particles from 'react-particles-js';

let params = {
	"particles": {
		"number": {
			"value": 40,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": [
				"#c311e7",
				"#b8e986",
				"#4dc9ff",
				"#ffd300",
				"#ff7e79"
			]
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": .9,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": .5,
				"sync": false
			}
		},
		"size": {
			"value": 8,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 30,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 100,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 3,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "bounce",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 125,
				"duration": 1
			},
			"push": {
				"particles_nb": 3
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
	// *EE^WDte@VPnyi&o9vE5X@WbWNe*k5ka
}


class Particle extends Component {
	render() {
		return (
			<div id="particles-js">
				<Particles width='100vw' height="100vh" params={params} />
			</div>
		)
	}
}

export default Particle;