import React, { Component } from 'react';
import { Particles as ReactParticles } from 'react-particles-js';

const PARAMS = {
    particles: {
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
        number: {
            value: 0
        },
        collisions: {
            enable: false
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: .75,
            random: false,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: true
            }
        },
        size: {
            value: 5,
            random: {
                enable: true,
                minimumValue: 3
            },
            animation: {
                enable: false,
                speed: 10,
                minimumValue: 0.1,
                sync: true
            }
        },
        links: {
            enable: false
        },
        life: {
            duration: {
                sync: true,
                value: 4
            },
            count: 1
        },
        move: {
            enable: true,
            gravity: {
                enable: true
            },
            speed: 10,
            direction: "none",
            random: false,
            straight: false,
            outMode: "destroy"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onHover: {
                enable: false,
                mode: "repulse",
                parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10
                }
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
            },
            repulse: {
                distance: 400
            },
            push: {
                particles_nb: 100
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    detectRetina: true,
    emitters: {
        direction: "none",
        life: {
            count: 0,
            duration: 0.25,
            delay: 0.75
        },
        rate: {
            delay: 0.1,
            quantity: 100
        },
        size: {
            width: 0,
            height: 0
        }
    },
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