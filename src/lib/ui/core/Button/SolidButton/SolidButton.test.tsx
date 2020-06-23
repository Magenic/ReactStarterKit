import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import SolidButton from '.';

afterEach(cleanup);

const testId = 'solid-button';

test('<SolidButton/> renders', () => {
  const {getByTestId} = render(<SolidButton />);
  const button = getByTestId(testId);
  expect(button).toHaveStyleRule('pointer-events', 'auto', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'pointer', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<SolidButton/> Disabled', () => {
  const {getByTestId} = render(<SolidButton disabled />);
  const button = getByTestId(testId);
  expect(button).toHaveAttribute('disabled');
  expect(button).toHaveStyleRule('pointer-events', 'none', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'default', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<SolidButton/> onClick', () => {
  const handleClick = jest.fn();
  const {getByTestId} = render(<SolidButton onClick={handleClick} />);
  const button = getByTestId(testId);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
