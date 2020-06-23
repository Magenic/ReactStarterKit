import {colors} from 'providers/ThemeProvider/configs';

interface ButtonColorProps {
  main: string;
  hover: string;
  contrastText: string;
}

interface ButtonConfig {
  color: {
    primary: ButtonColorProps;
    grey: ButtonColorProps;
  };
}

const config: ButtonConfig = {
  color: {
    primary: {
      main: colors.cyan.main,
      hover: colors.cyan.dark,
      contrastText: colors.cyan.contrastText,
    },
    grey: {
      main: colors.grey.main,
      hover: colors.grey.dark,
      contrastText: colors.grey.contrastText,
    },
  },
};

export default config;
