import React from 'react';

import {ComponentWithChildren} from 'lib/@types';
import RouterProvider from 'providers/RouterProvider';
import ModalProvider from 'providers/ModalProvider';
import NotificationsProvider from 'providers/NotificationsProvider';
import ThemeProvider from 'providers/ThemeProvider';

type AppProvidersProps = ComponentWithChildren;

const AppProviders = ({children}: AppProvidersProps) => {
  return (
    <ThemeProvider>
      <NotificationsProvider>
        <ModalProvider>
          <RouterProvider>{children}</RouterProvider>
        </ModalProvider>
      </NotificationsProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
