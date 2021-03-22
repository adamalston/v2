import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppContext';

const F = {
  Container: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: ${(props) => (props.isMobile ? '1.5rem' : '1rem')};
    z-index: 1;
  `,
  Text: styled.p`
    transition: color 0.5s linear;
    color: ${(props) => (props.isDark ? '#888' : '#777')};
  `,
  Link: styled.a`
    transition: color 0.5s linear;
    text-decoration: none;
    color: ${(props) => (props.isDark ? '#ccc' : '#333')};
  `,
};

export const Footer = () => {
  const { isDark } = useContext(AppContext);

  const isMobile = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

  return (
    <F.Container isMobile={isMobile}>
      <F.Text isDark={isDark} aria-label='Designed and built by Adam Alston'>Designed and built by&nbsp;
        <F.Link isDark={isDark} href='https://www.adamalston.com/'>Adam Alston</F.Link>
        {isMobile ? (
          <></>
        ) : (
          <>
            &nbsp;|&nbsp;<F.Link isDark={isDark} href='https://github.com/adamalston/v2'>Source</F.Link>
          </>
        )}
      </F.Text>
    </F.Container>
  );
};
