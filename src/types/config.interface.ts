export interface Content {
  display: string;
  aria: string;
}

export interface Button extends Content {
  name: string;
  icon: JSX.Element;
  href: string;
}

export interface Config {
  name: Content;
  title: Content;
  buttons: Button[];
}
