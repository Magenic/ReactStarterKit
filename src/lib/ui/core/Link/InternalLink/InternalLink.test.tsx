import React from 'react';
import {
  render,
  cleanup,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import InternalLink from '.';
import linkConfig from '../link.config';

afterEach(cleanup);

const testId = 'internal-link';

test('<InternalLink/> renders', () => {
  const {getByTestId} = render(<InternalLink to="/path/to/page" />);
  const element = getByTestId(testId);
  expect(element).toHaveAttribute('href', '/path/to/page');
  expect(element).toBeInTheDocument();
});

test('<InternalLink/> styles', () => {
  const {getByTestId} = render(<InternalLink to="/" />);
  const button = getByTestId(testId);

  expect(button).toHaveStyleRule('color', linkConfig.color.primary.main);
  expect(button).toHaveStyleRule('color', linkConfig.color.primary.main, {
    modifier: ':any-link:link',
  });
  expect(button).toHaveStyleRule('color', linkConfig.color.primary.visited, {
    modifier: ':any-link:visited',
  });
  expect(button).toHaveStyleRule('color', linkConfig.color.primary.active, {
    modifier: ':any-link:active',
  });
  expect(button).toHaveStyleRule('color', linkConfig.color.primary.hover, {
    modifier: ':any-link:hover',
  });
});
