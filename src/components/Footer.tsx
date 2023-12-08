import { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const F = {
  Container: styled.div<{ $isMobile: boolean }>`
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
    text-decoration: none;
    color: ${({ $theme }) => $theme.secondaryTextColor};
  `,
};

export const Footer = () => {
  const { isMobile, theme } = useContext(AppContext);

  return (
    <F.Container $isMobile={isMobile}>
      <F.Text
        data-v2="footer"
        aria-label="Designed and built by Adam Alston"
        $theme={theme}
      >
        {'Designed and built by '}
        <F.Link
          data-v2="creator"
          href="https://www.adamalston.com"
          aria-label="Adam's website"
          title="A link to Adam's personal website"
          $theme={theme}
        >
          {'Adam Alston'}
        </F.Link>
        {!isMobile && (
          <>
            {' | '}
            <F.Link
              data-v2="source"
              href="https://github.com/adamalston/v2/"
              aria-label="Source code"
              title="View this website's source code in GitHub"
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
