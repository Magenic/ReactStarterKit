import React from 'react';

import {ComponentWithChildren} from 'lib/@types';

import ThemeProvider from 'providers/ThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';

type TestingProviderProps = ComponentWithChildren;

const TestingProvider = ({children}: TestingProviderProps) => {
  return (
    <ThemeProvider>
      <Router>{children}</Router>
    </ThemeProvider>
  );
};

export default TestingProvider;
