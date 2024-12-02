import { ISourceOptions } from 'tsparticles';

// https://github.com/matteobruni/tsparticles/issues/2771
export const options: Record<string, ISourceOptions> = {
  regular: {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['c912ed', '00bfff', '22dd22', 'ffd500', 'ff8000', 'ff2600'],
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 2,
        },
        anim: {
          enable: false,
          speed: 30,
          size_min: 0.1,
          sync: true,
        },
      },
      links: {
        enable: true,
        distance: 75,
        color: '999',
        opacity: 0.9,
        width: 1,
        consent: false,
        blink: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'bounce',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 100,
          duration: 1,
          speed: 5,
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
        },
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
        repulse: {
          distance: 100,
          duration: 1,
        },
      },
    },
    retina_detect: true,
    fpsLimit: 60,
    fullScreen: {
      enable: false,
    },
    key: '3m@62^K^88745%',
  },
  confetti: {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: '#f00',
      },
      shape: {
        type: ['circle', 'square', 'polygon'],
        options: {
          polygon: {
            sides: 6,
          },
        },
      },
      opacity: {
        value: { min: 0, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          startValue: 'max',
          destroy: 'min',
        },
      },
      size: {
        value: { min: 3, max: 7 },
      },
      life: {
        duration: {
          sync: true,
          value: 7,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
        },
        drift: {
          min: -2,
          max: 2,
        },
        speed: { min: 10, max: 30 },
        decay: 0.1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'destroy',
          top: 'none',
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: 'random',
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: 'random',
        enable: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    detectRetina: true,
    emitters: {
      direction: 'none',
      spawnColor: {
        value: 'ffff99',
      },
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.6,
      },
      rate: {
        delay: 0.1,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
    fullScreen: {
      enable: false,
    },
  },
  fireworks: {
    fullScreen: {
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 90,
    background: {
      color: '#000',
    },
    emitters: {
      direction: 'top',
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.35,
      },
      rate: {
        delay: 0.5,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        y: 100,
        x: 50,
      },
    },
    particles: {
      number: {
        value: 0,
      },
      destroy: {
        mode: 'split' as never,
        split: {
          count: 1,
          factor: {
            value: 0.333333,
          },
          rate: {
            value: 100,
          },
          particles: {
            stroke: {
              width: 0,
            },
            color: {
              value: [
                'C912ED',
                '00BFFF',
                '22DD22',
                'FFD500',
                'FF8000',
                'FF2600',
              ],
            },
            number: {
              value: 0,
            },
            collisions: {
              enable: false,
            },
            opacity: {
              value: {
                min: 0.1,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
                startValue: 'max',
                destroy: 'min',
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 3,
              animation: {
                enable: false,
              },
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 10,
                },
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: false,
              },
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              outMode: 'destroy',
            },
          },
        },
      },
      life: {
        count: 1,
      },
      shape: {
        type: 'line',
      },
      size: {
        value: {
          min: 0.1,
          max: 50,
        },
        animation: {
          enable: true,
          sync: true,
          speed: 90,
          startValue: 'max',
          destroy: 'min',
        },
      },
      stroke: {
        color: {
          value: '#ffffff',
        },
        width: 1,
      },
      rotate: {
        path: true,
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100,
        },
        speed: {
          min: 10,
          max: 20,
        },
        outModes: {
          default: 'destroy',
          top: 'none',
        },
        trail: {
          fillColor: '#000',
          enable: true,
          length: 10,
        },
      },
    },
  },
  stars: {
    detectRetina: true,
    fpsLimit: 90,
    particles: {
      color: {
        value: '#fff',
      },
      number: {
        density: {
          enable: true,
          area: 1080,
        },
        limit: 0,
        value: 400,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 0.25,
          sync: false,
        },
        random: {
          enable: true,
          minimumValue: 0.05,
        },
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      links: {
        enable: false,
      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: false,
        },
        speed: 0.5,
        direction: 'none',
        random: false,
        straight: false,
        outMode: 'destroy',
      },
    },
  },
};
