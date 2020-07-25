import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Buttons from './Buttons'
import registerIcons from './FontAwesome';

test('renders name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Adam Alston/i);
    expect(linkElement).toBeInTheDocument();
});

jest.mock('./FontAwesome.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

test("registers icons before invocation", () => {
    render(<Buttons />);
    expect(registerIcons).toHaveBeenCalled();
});
