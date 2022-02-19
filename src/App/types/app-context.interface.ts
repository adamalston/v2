import Config from './config.interface';

interface AppContextInterface {
  config: Config;
  isMobile: boolean;
  theme: any;
  setTheme: Function;
}

export default AppContextInterface;
