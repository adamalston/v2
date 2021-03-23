import React from 'react';
import { configure, render, screen } from '@testing-library/react';

import './__mocks__/matchMedia';
import App from './App/App';

configure({ testIdAttribute: 'data-v2' });

describe('application tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders name: Adam Alston', () => {
    const element = screen.getByTestId('name');
    expect(element).toHaveTextContent(/Adam Alston/i);
  });

  test('renders title: Software Engineer', () => {
    const element = screen.getByTestId('title');
    expect(element).toHaveTextContent(/Software Engineer/i);
  });

  test('renders creator: Adam Alston', () => {
    const element = screen.getByTestId('creator');
    expect(element).toHaveTextContent(/Adam Alston/i);
  });

  test('renders hyperlink to source code', () => {
    const element = screen.getByTestId('source');
    expect(element).toHaveAttribute('href', 'https://github.com/adamalston/v2');
  });

  const buttons = {
    GitHub: 'https://github.com/adamalston/',
    LinkedIn: 'https://www.linkedin.com/in/adam-alston/',
    Resume: 'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
    Email: 'mailto:aalston9@gmail.com',
  };

  test('renders 4 buttons with links', () => {
    Object.entries(buttons).forEach(([k, v]) => {
      const element = screen.getByTestId(`${k}`);
      expect(element).toHaveTextContent(k);

      const parent = element.parentElement;
      expect(parent).toHaveAttribute('href', v);
    });
  });
});
