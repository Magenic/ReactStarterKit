import theme from 'providers/ThemeProvider/theme';

interface ButtonColorProps {
  main: string;
  hover: string;
  visited: string;
  active: string;
}

interface LinkConfig {
  color: {
    primary: ButtonColorProps;
  };
}

const config: LinkConfig = {
  color: {
    primary: {
      main: theme.color.primary.main,
      hover: theme.color.primary.dark,
      visited: theme.color.primary.dark,
      active: theme.color.primary.dark,
    },
  },
};

export default config;
