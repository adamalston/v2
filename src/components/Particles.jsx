import React, { useContext } from 'react';
import styled from 'styled-components';
import { Particles as ReactParticles } from 'react-tsparticles';

import { AppContext } from 'App/AppContext';
import options from 'appearance/particleOptions';

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

const Particles = () => {
  const { theme } = useContext(AppContext);

  return (
    <P.Container data-v2="particles" theme={theme} aria-label="Particles">
      <ReactParticles
        width="100vw"
        height="100vh"
        id="fireworks"
        options={options.fireworks}
      />
      <ReactParticles
        width="100vw"
        height="100vh"
        id="stars"
        options={options.stars}
      />
    </P.Container>
  );
};

export default Particles;
