import React, { useContext } from 'react';
import styled from 'styled-components';
import { Particles as ReactParticles } from 'react-tsparticles';

import { AppContext } from './../App/AppContext';

const P = {
  Container: styled.div`
    transition: background-color 0.5s linear;
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  `,
};

export const Particles = () => {
  const { theme } = useContext(AppContext);

  const FIREWORKS = {
    fullScreen: {
      zIndex: -1,
    },
    detectRetina: true,
    background: {
      color: "#000",
    },
    fpsLimit: 90,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
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
        mode: "split",
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
                "C912ED",
                "00BFFF",
                "22DD22",
                "FFD500",
                "FF8000",
                "FF2600",
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
                startValue: "max",
                destroy: "min",
              },
            },
            shape: {
              type: "circle",
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
              direction: "none",
              random: true,
              straight: false,
              outMode: "destroy",
            },
          },
        },
      },
      life: {
        count: 1,
      },
      shape: {
        type: "line",
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
          startValue: "max",
          destroy: "min",
        },
      },
      stroke: {
        color: {
          value: "#ffffff",
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
          default: "destroy",
          top: "none",
        },
        trail: {
          fillColor: "#000",
          enable: true,
          length: 10,
        },
      },
    },
    // 3m@62^K^88745%
  };

  const STARS = {
    particles: {
      color: {
        value: "#fff",
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
        type: "circle",
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
        direction: "none",
        random: false,
        straight: false,
        outMode: "destroy",
      },
    },
    detectRetina: true,
  };

  return (
    <P.Container theme={theme}>
      <ReactParticles
        width='100vw'
        height='100vh'
        id='fireworks'
        options={FIREWORKS}
      />
      <ReactParticles width='100vw' height='100vh' id='stars' options={STARS} />
    </P.Container>
  );
};
