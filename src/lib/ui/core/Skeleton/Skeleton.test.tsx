import React from 'react';
import {
  render,
  cleanup,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import Skeleton from '.';

afterEach(cleanup);

const testId = 'skeleton';

test('<Skeleton/> renders', () => {
  const {getByTestId} = render(<Skeleton />);
  const element = getByTestId(testId);
  expect(element).toBeInTheDocument();
});

test('<Skeleton count={?}/> renders', () => {
  const {getAllByTestId} = render(<Skeleton count={5} />);
  const elements = getAllByTestId(testId);
  expect(elements).toHaveLength(5);
});

test('<Skeleton circle/> renders', () => {
  const size = '50px';
  const {getByTestId} = render(<Skeleton circle width={size} height={size} />);
  const element = getByTestId(testId);
  expect(element).toHaveAttribute('width', size);
  expect(element).toHaveAttribute('height', size);
  expect(element).toHaveStyleRule('border-radius', '100%');
});
