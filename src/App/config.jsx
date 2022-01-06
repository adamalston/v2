import { GitHub, LinkedIn, Resume, Email } from './../icons';

const config = {
  info: {
    name: 'Adam Alston',
    title: 'Software Engineer',
  },
  buttons: [
    {
      href: 'https://github.com/adamalston/',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/adam-alston/',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      label: 'LinkedIn',
    },
    {
      href: 'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
      aria: 'Visit Google Drive to view and download my resume',
      icon: <Resume />,
      label: 'Resume',
    },
    {
      href: 'mailto:aalston9@gmail.com',
      aria: 'Send me an email with this template',
      icon: <Email />,
      label: 'Email',
    },
  ],
  options: {
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
          speed: 3,
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
    // 3m@62^K^88745%
  },
};

export default config;
