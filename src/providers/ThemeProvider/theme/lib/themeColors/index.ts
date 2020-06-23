import {colors} from '../../../configs';

export interface ColorVariations {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface ThemeColors {
  common: {
    black: string;
    white: string;
  };
  primary: ColorVariations;
  background: {
    paper: string;
    app: string;
  };
  text: {
    primary: string;
    secondary: string;
    hint: string;
  };
  status: {
    error: ColorVariations;
    warning: ColorVariations;
    info: ColorVariations;
    success: ColorVariations;
    disabled: string;
  };
  shadow: string;
}

export const themeColors: ThemeColors = {
  common: {
    black: colors.black.dark,
    white: colors.white.light,
  },
  primary: {
    light: colors.blue.light,
    main: colors.blue.main,
    dark: colors.blue.dark,
    contrastText: colors.blue.contrastText,
  },
  background: {
    paper: colors.white.light,
    app: colors.white.main,
  },
  text: {
    primary: colors.black.dark,
    secondary: colors.black.main,
    hint: colors.black.light,
  },
  status: {
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: '#000',
    },
    disabled: colors.grey.light,
  },
  shadow: colors.grey.main,
};

export default themeColors;
