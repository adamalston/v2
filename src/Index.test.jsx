import React from 'react';
import { render } from '@testing-library/react';
import './__mocks__/matchMedia';
import { Content, Footer } from './components/'

test('renders name: Adam Alston', () => {
    const { getByText } = render(<Content />);
    const linkElement = getByText('Adam Alston');
    expect(linkElement).toBeInTheDocument();
});

test('renders title: Software Engineer', () => {
    const { getByText } = render(<Content />);
    const linkElement = getByText('Let It Snow!');
    expect(linkElement).toBeInTheDocument();
});

test('renders creator: Adam Alston', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/Adam Alston/i);
    expect(linkElement).toBeInTheDocument();
});

// global.matchMedia = media => ({
//     addListener: () => { },
//     removeListener: () => { },
//     matches: media === '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)',
// });

// test('renders hyperlink to source', () => {
//     matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)')
//     const { getByText } = render(<Footer />);
//     const linkElement = getByText(/Source/i);
//     expect(linkElement).toBeInTheDocument();
// });