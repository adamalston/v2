import { Config } from '.';
import { Theme } from 'appearance/types/theme.interface';

interface AppProviderInterface {
  config: Config;
  isMobile: boolean;
}

interface AppContextInterface extends AppProviderInterface {
  theme: Theme;
  setTheme: Function;
}

export { AppProviderInterface, AppContextInterface };
