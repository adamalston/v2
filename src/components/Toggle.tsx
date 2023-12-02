import { ChangeEvent, useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Moon, Sun } from 'icons';
import { DARK, LIGHT, THEME } from './../constants';
import { themes } from 'appearance';

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
  /* Toggle CSS changes for accessibility: https://stackoverflow.com/a/20130500 */
  Toggle: styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
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
  const { theme, setTheme } = useContext(AppContext);
  const isDark = theme === DARK;
  const themeConfig = themes[theme];

  return (
    <T.Container>
      <T.Toggle
        data-v2="toggle"
        id="toggle"
        name="toggle"
        type="checkbox"
        checked={isDark}
        onChange={({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
          const key = checked ? DARK : LIGHT;

          localStorage.setItem(THEME, key);
          setTheme(key);
        }}
        aria-label="Theme toggle"
        title="Theme toggle"
      />
      <T.Switch theme={themeConfig} htmlFor="toggle">
        {isDark ? <Moon /> : <Sun />}
      </T.Switch>
    </T.Container>
  );
};
