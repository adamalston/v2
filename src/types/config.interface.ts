interface Content {
  display: string;
  aria: string;
}

interface Button extends Content {
  icon: JSX.Element;
  href: string;
}

interface Config {
  name: Content;
  title: Content;
  buttons: Button[];
}

export { Content, Button, Config };
