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

    expect(element).toBeVisible();
    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Adam Alston$/);
  });

  it('should render title: Software Engineer', () => {
    const element = screen.getByTestId('title');

    expect(element).toBeVisible();
    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Software Engineer$/);
  });

  it('should render creator', () => {
    const element = screen.getByTestId('creator');

    expect(element).toBeVisible();
    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Adam Alston$/);
  });

  it('should render link to source code', () => {
    const element = screen.getByTestId('source');

    expect(element).toBeVisible();
    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveAttribute('href', 'https://github.com/adamalston/v2');
  });

  it('should render GitHub button', () => {
    const child = screen.getByTestId('GitHub');
    const parent = screen.getByTestId('button-GitHub');

    expect(child).toHaveTextContent(/^GitHub$/);

    expect(parent).toBeVisible();
    expect(parent).toHaveAccessibleName();
    expect(parent).toHaveAccessibleDescription();
    expect(parent).toHaveAttribute('href', 'https://github.com/adamalston/');
  });

  it('should render LinkedIn button', () => {
    const child = screen.getByTestId('LinkedIn');
    const parent = screen.getByTestId('button-LinkedIn');

    expect(child).toHaveTextContent(/^LinkedIn$/);

    expect(parent).toBeVisible();
    expect(parent).toHaveAccessibleName();
    expect(parent).toHaveAccessibleDescription();
    expect(parent).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/adam-alston/'
    );
  });

  it('should render Resume button', () => {
    const child = screen.getByTestId('Resume');
    const parent = screen.getByTestId('button-Resume');

    expect(child).toHaveTextContent(/^Resume$/);

    expect(parent).toBeVisible();
    expect(parent).toHaveAccessibleName();
    expect(parent).toHaveAccessibleDescription();
    expect(parent).toHaveAttribute(
      'href',
      'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/'
    );
  });

  it('should render Email button', () => {
    const child = screen.getByTestId('Email');
    const parent = screen.getByTestId('button-Email');

    expect(child).toHaveTextContent(/^Email$/);

    expect(parent).toBeVisible();
    expect(parent).toHaveAccessibleName();
    expect(parent).toHaveAccessibleDescription();
    expect(parent).toHaveAttribute('href', 'mailto:aalston9@gmail.com');
  });

  it('should toggle between dark and light themes', () => {
    const toggle = screen.getByTestId('toggle');
    const particles = screen.getByTestId('particles');

    expect(toggle).toBeVisible();
    expect(toggle).toHaveAccessibleName();
    expect(toggle).toHaveAccessibleDescription();

    expect(particles).toBeVisible();
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
