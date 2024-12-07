import type { JSX } from 'react';

export interface Content {
  display: string;
}

export interface Button extends Content {
  name: string;
  ariaLabel: string;
  icon: JSX.Element;
  href: string;
}

export interface Config {
  name: Content;
  title: Content;
  buttons: Button[];
}
