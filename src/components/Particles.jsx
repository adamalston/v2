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

  const OPTIONS = {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": false
        }
      },
      "size": {
        "value": 10,
        "random": true
      },
      "move": {
        "direction": "bottom",
        "enable": true,
        "out_mode": "out",
      },
      "line_linked": {
        "enable": false
      }
    },
    "interactivity": {
      "events": {
        "onclick": {
          "enable": true,
          "mode": "remove"
        }
      },
      "modes": {
        "remove": {
          "particles_nb": 10
        }
      }
    },
    retina_detect: true,
    fpsLimit: 60,
    // 3m@62^K^88745%
  };

  return (
    <P.Container theme={theme}>
      <ReactParticles width='100vw' height='100vh' options={OPTIONS} />
    </P.Container>
  );
};
