import { useContext } from 'react';
import styled from 'styled-components';
import ReactParticles from 'react-tsparticles';

import { AppContext } from 'App/AppContext';
import { options, themes } from 'appearance';

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

  const themeConfig = themes[theme];

  return (
    <P.Container data-v2="particles" theme={themeConfig} aria-label="Particles">
      <ReactParticles width="100vw" height="100vh" options={options} />
    </P.Container>
  );
};
