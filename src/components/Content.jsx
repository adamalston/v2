import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from './../App/AppContext';

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
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 4rem 0;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2.5rem;
    }
  `,
};

export const Content = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Name theme={theme} data-v2='name' aria-label='My name is Adam Alston'>Adam Alston</C.Name>
      <C.Title theme={theme} data-v2='title' aria-label='Happy New Year!'>Happy New Year!</C.Title>
    </div>
  );
};
