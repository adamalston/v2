export interface Content {
  display: string;
}

export interface Button extends Content {
  name: string;
  aria: string;
  icon: JSX.Element;
  href: string;
}

export interface Config {
  name: Content;
  title: Content;
  buttons: Button[];
}
