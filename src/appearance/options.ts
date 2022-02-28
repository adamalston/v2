import type { ISourceOptions } from 'tsparticles';

// https://github.com/matteobruni/tsparticles/issues/2771
const options: ISourceOptions = {
  retinaDetect: true,
  fpsLimit: 90,
  fullScreen: {
    enable: false,
  },
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
        sides: 5,
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
        minimumValue: 0.5,
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
        minimumValue: 0.1,
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
      outMode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
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
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 3,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 1,
      },
    },
  },
  key: '3m@62^K^88745%',
};

export default options;
