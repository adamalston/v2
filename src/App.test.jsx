import React from 'react';
import { render } from '@testing-library/react';
import Content from './components/Content'

test('renders name', () => {
    const { getByText } = render(<Content />);
    const linkElement = getByText(/Adam Alston/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders title', () => {
    const { getByText } = render(<Content />);
    const linkElement = getByText(/Software Engineer/i);
    expect(linkElement).toBeInTheDocument();
});
