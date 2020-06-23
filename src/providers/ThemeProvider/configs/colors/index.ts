import {lighten, darken} from 'polished';

export interface Colors {
  [key: string]: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
}

export const colors: Colors = {
  blue: {
    light: '#d2e6f0',
    main: '#14568d',
    dark: '#004c8b',
    contrastText: '#FFF',
  },
  cyan: {
    light: lighten(0.1, '#0d98d5'),
    main: '#0d98d5',
    dark: darken(0.1, '#0d98d5'),
    contrastText: '#FFF',
  },
  black: {
    light: '#424242',
    main: '#333333',
    dark: '#000',
    contrastText: '#FFF',
  },
  grey: {
    light: lighten(0.1, '#a9a9a9'),
    main: '#a9a9a9',
    dark: darken(0.1, '#a9a9a9'),
    contrastText: '#FFF',
  },
  white: {
    light: '#fff',
    main: '#f0f4f8',
    dark: '#bbb',
    contrastText: '#FFF',
  },
  yellow: {
    light: '#ffd0a2',
    main: '#eb8b2d',
    dark: '#f07700',
    contrastText: '#FFF',
  },
};

export default colors;
