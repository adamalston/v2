import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppContext';

const F = {
  Container: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: ${({ isMobile }) => (isMobile ? '1.5rem' : '1rem')};
    z-index: 1;
  `,
  Text: styled.p`
    transition: color 0.5s linear;
    color: ${({ theme }) => theme.tertiaryTextColor};
  `,
  Link: styled.a`
    transition: color 0.5s linear;
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryTextColor};
  `,
};

export const Footer = () => {
  const { theme, isMobile } = useContext(AppContext);

  return (
    <F.Container isMobile={isMobile}>
      <F.Text theme={theme} aria-label='Designed and built by Adam Alston'>Designed and built by&nbsp;
        <F.Link theme={theme} data-v2='creator' href='https://www.adamalston.com/'>Adam Alston</F.Link>
        {isMobile ? (
          <></>
        ) : (
          <>
            &nbsp;|&nbsp;<F.Link theme={theme} data-v2='source' aria-label='Source code' href='https://github.com/adamalston/v2'>Source</F.Link>
          </>
        )}
      </F.Text>
    </F.Container>
  );
};
