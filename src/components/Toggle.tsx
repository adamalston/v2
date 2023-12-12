import { ChangeEvent, useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Moon, Sun } from 'icons';
import { Theme } from 'types';

const T = {
  Container: styled.div`
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
  Switch: styled.label<{ $theme: Theme }>`
    cursor: pointer;
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.75rem;
    background-color: ${({ $theme }) => $theme.shadowColor};
    border-radius: 25%;
    box-shadow: 0 0 0.25rem 0.25rem rgba(128, 128, 128, 0.25);
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s linear;
    font-size: 0.5rem;
  `,
  VisuallyHidden: styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    white-space: nowrap;
  `,
};

export const Toggle = () => {
  const { theme, setTheme } = useContext(AppContext);
  const isDark: boolean = theme.key === 'dark';
  const ariaLabel = `Currently in ${
    isDark ? 'dark' : 'light'
  } mode, switch to ${!isDark ? 'dark' : 'light'} mode`;
  const toggleDescriptionId = 'toggle-description';

  const handleToggle = (checked: boolean) => {
    const key: string = checked ? 'dark' : 'light';

    localStorage.setItem('theme', key);
    setTheme(key);
  };

  return (
    <T.Container>
      <T.VisuallyHidden id={toggleDescriptionId}>
        Switch between dark and light mode for visual comfort.
      </T.VisuallyHidden>
      <T.Toggle
        data-v2="toggle"
        id="toggle"
        name="toggle"
        type="checkbox"
        checked={isDark}
        aria-label={ariaLabel}
        aria-describedby={toggleDescriptionId}
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          handleToggle(target.checked);
        }}
      />
      <T.Switch htmlFor="toggle" $theme={theme}>
        <T.VisuallyHidden>{ariaLabel}</T.VisuallyHidden>
        {isDark ? <Moon /> : <Sun />}
      </T.Switch>
    </T.Container>
  );
};
