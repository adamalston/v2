import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppContext';
import { Moon, Sun } from './../icons';

const T = {
  Container: styled.main`
    position: fixed;
    z-index: 1;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    :active {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  `,
  Toggle: styled.input`
    display: none;
  `,
  Switch: styled.label`
    cursor: pointer;
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.shadowColor};
    border-radius: 25%;
    box-shadow: 0 0 0.25rem 0.25rem rgba(128, 128, 128, 0.25);
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s linear;
    font-size: 0.5rem;
  `,
};

export const Toggle = () => {
  const { isDark, setIsDark, theme } = useContext(AppContext);

  return (
    <T.Container>
      <T.Toggle id='toggle' name='toggle' type='checkbox' checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
      <T.Switch theme={theme} htmlFor='toggle'>
        {isDark ? <Moon /> : <Sun />}
      </T.Switch>
    </T.Container>
  );
};
