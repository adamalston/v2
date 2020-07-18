import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

test('renders name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Adam Alston/i);
    expect(linkElement).toBeInTheDocument();
});
