import React, { Component } from 'react';
import { Particles as ReactParticles } from 'react-particles-js';

const PARAMS = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "area": 800
            }
        },
        "color": {
            "value": [
                "C912ED",
                "00BFFF",
                "22DD22",
                "FFD500",
                "FF8000",
                "FF2600",
            ]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "000000"
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
            "value": 4,
            "random": {
                "enable": true,
                "minimumValue": 2
            },
            "anim": {
                "enable": false,
                "speed": 30,
                "size_min": 0.1,
                "sync": true
            }
        },
        "links": {
            "enable": true,
            "distance": 75,
            "color": "777777",
            "opacity": 0.6,
            "width": 1,
            "consent": false,
            "blink": false
        },
        "move": {
            "enable": true,
            "speed": 4,
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
            "attract": {
                "distance": 100,
                "duration": 1,
                "speed": 5
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 3
            },
            "remove": {
                "particles_nb": 2
            },
            "repulse": {
                "distance": 100,
                "duration": 1
            }
        }
    },
    "retina_detect": true
    // 3m@62^K^88745%
}

class Particles extends Component {
    render() {
        return (
            <div className='particles'>
                <ReactParticles width='100vw' height='100vh' params={PARAMS} />
            </div>
        )
    }
}

export default Particles;
