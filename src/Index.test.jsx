import React from 'react';
import { configure, fireEvent, render, screen } from '@testing-library/react';

import '__mocks__/matchMedia';
import App from 'App/App';

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

  it('should render title: Happy New Year!', () => {
    const element = screen.getByTestId('title');

    expect(element).toBeVisible();
    expect(element).toHaveAccessibleName();
    expect(element).toHaveAccessibleDescription();
    expect(element).toHaveTextContent(/^Happy New Year!$/);
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

  it.skip('should toggle between the dark and light themes', () => {
    const toggle = screen.getByTestId('toggle');
    const particles = screen.getByTestId('particles');

    expect(toggle).toBeVisible();
    expect(toggle).toHaveAccessibleName();
    expect(toggle).toHaveAccessibleDescription();

    expect(particles).toBeVisible();
    expect(particles).toHaveAccessibleName();

    // site should default to the dark theme
    expect(toggle).toBeChecked();
    expect(particles).toHaveStyle({ backgroundColor: '#000' });

    // click the toggle
    fireEvent.click(toggle);

    // the light theme should be visible
    expect(toggle).not.toBeChecked();
    expect(particles).toHaveStyle({ backgroundColor: '#fff' });
  });

  it('should render full footer on desktop', () => {
    const footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent(
      /^Designed and built by Adam Alston \| Source$/
    );
  });

  it.skip('should render partial footer on mobile', () => {
    // resize the screen to a mobile resolution
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1170,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 2532,
    });
    Object.defineProperty(window, 'devicePixelRatio', {
      writable: true,
      configurable: true,
      value: 4,
    });

    window.dispatchEvent(new Event('resize'));

    expect(window.innerWidth).toBe(1170);
    expect(window.innerHeight).toBe(2532);
    expect(window.devicePixelRatio).toBe(4);

    // partial footer should now be visible
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent(/^Designed and built by Adam Alston$/);
  });
});

describe.skip('local storage tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should show the dark theme when 'theme' is set to 'true' in local storage", () => {
    // set local storage item and render the app
    localStorage.setItem('theme', true);
    render(<App />);

    // check that the local storage item has been updated correctly
    expect(localStorage.getItem('theme')).toEqual('dark');
    const particles = screen.getByTestId('particles');
    expect(particles).toHaveStyle({ backgroundColor: '#000' });
  });

  it("should show the light theme when 'theme' is set to 'false' in local storage", () => {
    // set local storage item and render the app
    localStorage.setItem('theme', false);
    render(<App />);

    // check that the local storage item has been updated correctly
    expect(localStorage.getItem('theme')).toEqual('light');
    const particles = screen.getByTestId('particles');
    expect(particles).toHaveStyle({ backgroundColor: '#fff' });
  });

  // https://testing-library.com/docs/react-testing-library/api/#rerender
  it('should persist the light theme through an app re-render', () => {
    const { rerender } = render(<App />);
    localStorage.setItem('theme', 'light');

    // re-render the app and check the theme
    rerender(<App />);
    const particles2 = screen.getByTestId('particles');

    expect(localStorage.getItem('theme')).toEqual('light');
    expect(particles2).toHaveStyle({ backgroundColor: '#fff' });
  });
});
