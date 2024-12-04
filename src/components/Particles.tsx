import { useContext } from 'react';
import styled from 'styled-components';
import ReactParticles from 'react-tsparticles';

import { AppContext } from 'App/AppContext';
import { options } from 'appearance';
import { Theme } from 'types';

const P = {
  Container: styled.div<{ $theme: Theme }>`
    transition: background-color 0.5s linear;
    position: absolute;
    background-color: ${({ $theme }) => $theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  `,
};

export const Particles = () => {
  const { theme } = useContext(AppContext);

  return (
    <P.Container data-v2="particles" $theme={theme}>
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
