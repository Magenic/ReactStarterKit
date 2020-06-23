import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {ComponentWithChildren} from 'lib/@types';
import NotificationsProvider from 'providers/NotificationsProvider';
import ThemeProvider from 'providers/ThemeProvider';
import ModalProvider from 'providers/ModalProvider';

type StorybookProviderProps = ComponentWithChildren;

const StorybookProvider = ({children}: StorybookProviderProps) => {
  return (
    <ModalProvider>
      <ThemeProvider>
        <NotificationsProvider>
          <Router>{children}</Router>
        </NotificationsProvider>
      </ThemeProvider>
    </ModalProvider>
  );
};

export default StorybookProvider;
