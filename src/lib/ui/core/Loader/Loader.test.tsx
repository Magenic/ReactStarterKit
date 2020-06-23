import React from 'react';
import {
  render,
  cleanup,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import Loader from '.';

afterEach(cleanup);

const testId = 'loader';

test('<Loader/> renders', () => {
  const size = '20px';
  const thickness = 5;
  const {getByTestId} = render(<Loader size={size} thickness={thickness} />);
  const element = getByTestId(testId);
  const circle = getByTestId(`${testId}-svg-circle`);
  expect(element).toHaveAttribute('width', size);
  expect(element).toHaveAttribute('height', size);
  expect(circle).toHaveAttribute('stroke-width', `${thickness}`);
  expect(element).toBeInTheDocument();
});
