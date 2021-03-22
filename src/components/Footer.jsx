import React from 'react';
import styled from 'styled-components';

const F = {
  Container: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: 1.5rem;
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

export const Footer = ({ isDark }) => {
  const isMobileDevice = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

  return (
    <F.Container>
      <F.Text isDark={isDark} aria-label='Designed and built by Adam Alston'>Designed and built by&nbsp;
        <F.Link isDark={isDark} href='https://www.adamalston.com/'>Adam Alston</F.Link>
        {isMobileDevice ? (
          <></>
        ) : (
          <>&nbsp;|&nbsp;
            <F.Link isDark={isDark} href='https://github.com/adamalston/v2'>Source</F.Link>
          </>
        )}
      </F.Text>
    </F.Container>
  );
};
