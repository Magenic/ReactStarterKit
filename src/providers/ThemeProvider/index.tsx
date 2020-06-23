import React from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components/macro';
import {ComponentWithChildren} from 'lib/@types';
import theme from './theme';
import GlobalStyles from './globalStyles';

import 'normalize.css';

type ThemeProviderProps = ComponentWithChildren;

const ThemeProvider = ({children}: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
