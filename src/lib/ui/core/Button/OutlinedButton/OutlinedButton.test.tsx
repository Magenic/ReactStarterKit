import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import OutlinedButton from '.';

afterEach(cleanup);

const testId = 'outlined-button';

test('<OutlinedButton/> renders', () => {
  const {getByTestId} = render(<OutlinedButton />);
  const button = getByTestId(testId);
  expect(button).toHaveStyleRule('pointer-events', 'auto', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'pointer', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<OutlinedButton/> Disabled', () => {
  const {getByTestId} = render(<OutlinedButton disabled />);
  const button = getByTestId(testId);
  expect(button).toHaveAttribute('disabled');
  expect(button).toHaveStyleRule('pointer-events', 'none', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'default', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<OutlinedButton/> onClick', () => {
  const handleClick = jest.fn();
  const {getByTestId} = render(<OutlinedButton onClick={handleClick} />);
  const button = getByTestId(testId);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
