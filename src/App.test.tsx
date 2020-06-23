import React from 'react';
import {render} from 'providers/TestingProvider/helpers/testing-library-utils';
import App from './App';

test('<App/>', () => {
  const {getByTestId} = render(<App />);
  const appNavigation = getByTestId('top-navigation');
  expect(appNavigation).toBeInTheDocument();
});
