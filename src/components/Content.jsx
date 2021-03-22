import React from 'react';
import styled, { css } from 'styled-components';

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1`
    ${sharedStyles};
    font-size: 6rem;
    margin: 0 0 3.5rem;
    color: ${(props) => (props.isDark ? '#fff' : '#000')};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 4rem 0;
    color: ${(props) => (props.isDark ? '#ccc' : '#333')};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2.5rem;
    }
  `,
};

export const Content = ({ isDark }) => {
  return (
    <div>
      <C.Name isDark={isDark} aria-label='My name is Adam Alston'>Adam Alston</C.Name>
      <C.Title isDark={isDark} aria-label='I am a software engineer'>Software Engineer</C.Title>
    </div>
  );
};
