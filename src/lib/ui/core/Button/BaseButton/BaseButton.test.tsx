import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import BaseButton from '.';

afterEach(cleanup);

const testId = 'base-button';

test('<BaseButton/> renders', () => {
  const {getByTestId} = render(<BaseButton />);
  const button = getByTestId(testId);
  expect(button).toHaveStyleRule('pointer-events', 'auto', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'pointer', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<BaseButton/> Disabled', () => {
  const {getByTestId} = render(<BaseButton disabled />);
  const button = getByTestId(testId);
  expect(button).toHaveAttribute('disabled');
  expect(button).toHaveStyleRule('pointer-events', 'none', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'default', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<BaseButton/> onClick', () => {
  const handleClick = jest.fn();
  const {getByTestId} = render(<BaseButton onClick={handleClick} />);
  const button = getByTestId(testId);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
