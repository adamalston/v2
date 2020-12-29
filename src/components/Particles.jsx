import React, { Component } from 'react';
import { Particles as ReactParticles } from 'react-particles-js';

const PARAMS = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "0099ff"
        },
        shape: {
            type: "image",
            stroke: {
                width: 3,
                color: "#fff"
            },
            image: {
                src:
                    "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .75,
            random: true,
        },
        size: {
            value: 7,
            random: true,
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.2
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
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
