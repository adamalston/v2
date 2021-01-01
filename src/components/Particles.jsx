import React, { Component } from 'react';
import { Particles as ReactParticles } from 'react-particles-js';

const PARAMS = {
    particles: {
        color: {
            value: "#fff"
        },
        number: {
            density: {
                enable: true,
                area: 1080
            },
            limit: 0,
            value: 400
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 0.25,
                sync: false
            },
            random: {
                enable: true,
                minimumValue: 0.05
            },
            value: 1
        },
        shape: {
            type: "circle"
        },
        links: {
            enable: false
        },
        size: {
            random: {
                enable: true,
                minimumValue: 0.5
            },
            value: 1
        },
        move: {
            enable: true,
            gravity: {
                enable: false
            },
            speed: .5,
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
                distance: 200
            },
            push: {
                particles_nb: 4
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
            duration: 0.1,
            delay: 0.1
        },
        rate: {
            delay: 0.1,
            quantity: 100
        },
        size: {
            width: 0,
            height: 0
        },
        particles: {
            color: {
                value: [
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
                    value: 0.5
                },
                count: 1
            },
            move: {
                enable: true,
                gravity: {
                    enable: false
                },
                speed: 25,
                direction: "none",
                random: false,
                straight: false,
                outMode: "destroy"
            }
        }
    }
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