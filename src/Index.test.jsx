import React from 'react';
import { configure, fireEvent, render, screen } from '@testing-library/react';

import './__mocks__/matchMedia';
import App from './App/App';

configure({ testIdAttribute: 'data-v2' });

describe('application tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render name: Adam Alston', () => {
    const element = screen.getByTestId('name');

    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Adam Alston$/);
  });

  it('should render title: Software Engineer', () => {
    const element = screen.getByTestId('title');

    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Software Engineer$/);
  });

  it('should render creator', () => {
    const element = screen.getByTestId('creator');

    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Adam Alston$/);
  });

  it('should render link to source code', () => {
    const element = screen.getByTestId('source');

    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveAttribute('href', 'https://github.com/adamalston/v2');
  });

  const buttons = {
    GitHub: 'https://github.com/adamalston/',
    LinkedIn: 'https://www.linkedin.com/in/adam-alston/',
    Resume:
      'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
    Email: 'mailto:aalston9@gmail.com',
  };

  it('should render buttons with links', () => {
    Object.entries(buttons).forEach(([k, v]) => {
      const element = screen.getByTestId(k);
      const parent = element.parentElement;

      expect(element).toHaveTextContent(new RegExp(`^${k}$`));

      expect(parent).toHaveAccessibleName();
      expect(parent).toHaveAccessibleDescription();
      expect(parent).toHaveAttribute('href', v);
    });
  });

  it('should toggle between dark and light themes', () => {
    const toggle = screen.getByTestId('toggle');
    const particles = screen.getByTestId('particles');

    expect(toggle).toHaveAccessibleName();
    expect(toggle).toHaveAccessibleDescription();

    expect(particles).toHaveAccessibleName();
    expect(particles).toHaveAccessibleDescription();

    // site should default to dark theme
    expect(toggle).toBeChecked();
    expect(particles).toHaveStyle({ backgroundColor: '#000' });

    // click the toggle
    fireEvent.click(toggle);

    // light theme should be visible
    expect(toggle).not.toBeChecked();
    expect(particles).toHaveStyle({ backgroundColor: '#fff' });
  });
});
