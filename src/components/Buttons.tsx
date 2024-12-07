import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const Container = styled.div<{ $theme: Theme }>`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 6rem;
    width: 6rem;
    margin: 0 1.75rem;
  }

  .button {
    transition: color 0.5s linear;
    height: 6rem;
    width: 6rem;
    color: ${({ $theme }) => $theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    height: 4.5rem;
    width: 4.5rem;
    padding: 1rem;
  }

  .icon_title {
    font-size: 1.25rem;
  }

  .button:hover {
    background-color: ${({ $theme }) => $theme.shadowColor};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
    }
  }
`;

export const Buttons = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <Container $theme={theme}>
      {config.buttons.map(({ name, display, ariaLabel, icon, href }) => (
        <span className="button-container" key={name}>
          <a
            data-v2={`button-${display}`}
            className="button"
            aria-label={ariaLabel}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="icon">{icon}</div>
            <span data-v2={display} className="icon_title">
              {display}
            </span>
          </a>
        </span>
      ))}
    </Container>
  );
};
