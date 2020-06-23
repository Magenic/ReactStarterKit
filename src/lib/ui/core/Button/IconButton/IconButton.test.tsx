import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import IconButton from '.';
import {ReactComponent as CloseIcon} from 'lib/assets/icons/closeIcon.svg';

afterEach(cleanup);

const testId = 'icon-button';

test('<IconButton/> renders', () => {
  const {getByTestId} = render(
    <IconButton>
      <CloseIcon />
    </IconButton>
  );
  const button = getByTestId(testId);
  expect(button).toHaveStyleRule('pointer-events', 'auto', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'pointer', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<IconButton/> Disabled', () => {
  const {getByTestId} = render(
    <IconButton disabled>
      <CloseIcon />
    </IconButton>
  );
  const button = getByTestId(testId);
  expect(button).toHaveAttribute('disabled');
  expect(button).toHaveStyleRule('pointer-events', 'none', {
    modifier: ':hover',
  });
  expect(button).toHaveStyleRule('cursor', 'default', {modifier: ':hover'});
  expect(button).toBeInTheDocument();
});

test('<IconButton/> onClick', () => {
  const handleClick = jest.fn();
  const {getByTestId} = render(
    <IconButton onClick={handleClick}>
      <CloseIcon />
    </IconButton>
  );
  const button = getByTestId(testId);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
