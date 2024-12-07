import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const F = {
  Container: styled.footer<{ $isMobile: boolean }>`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: ${({ $isMobile }) => ($isMobile ? '1.5rem' : '1rem')};
    z-index: 1;
  `,
  Text: styled.p<{ $theme: Theme }>`
    transition: color 0.5s linear;
    color: ${({ $theme }) => $theme.tertiaryTextColor};
  `,
  Link: styled.a<{ $theme: Theme }>`
    transition: color 0.5s linear;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
};

export const Footer = () => {
  const { isMobile, theme } = useContext(AppContext);

  return (
    <F.Container $isMobile={isMobile}>
      <F.Text data-v2="footer" $theme={theme}>
        {'Designed and built by '}
        <F.Link
          data-v2="creator"
          aria-label="Adam Alston's personal website (opens in new window)"
          href="https://www.adamalston.com/"
          rel="noopener noreferrer"
          target="_blank"
          $theme={theme}
        >
          {'Adam Alston'}
        </F.Link>
        {!isMobile && (
          <>
            {' | '}
            <F.Link
              data-v2="source"
              aria-label="Source code for this website (opens in new window)"
              href="https://github.com/adamalston/v2/"
              rel="noopener noreferrer"
              target="_blank"
              $theme={theme}
            >
              {'Source'}
            </F.Link>
          </>
        )}
      </F.Text>
    </F.Container>
  );
};
