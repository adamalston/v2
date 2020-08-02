import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Buttons from './components/Buttons'
import registerIcons from './components/FontAwesome';

test('renders name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Adam Alston/i);
    expect(linkElement).toBeInTheDocument();
});

jest.mock('./components/FontAwesome', () => ({
    __esModule: true,
    default: jest.fn()
}));

test("registers icons before invocation", () => {
    render(<Buttons />);
    expect(registerIcons).toHaveBeenCalled();
});
