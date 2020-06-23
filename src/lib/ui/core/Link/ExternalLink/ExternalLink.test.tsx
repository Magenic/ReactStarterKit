import React from 'react';
import {
  render,
  cleanup,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import ExternalLink from '.';
import linkConfig from '../link.config';

afterEach(cleanup);

const testId = 'external-link';

test('<ExternalLink/> renders', () => {
  const {getByTestId} = render(<ExternalLink href="google.com" />);
  const element = getByTestId(testId);
  expect(element).toHaveAttribute('href', 'https://google.com');
  expect(element).toBeInTheDocument();
});

test('<ExternalLink/> styles', () => {
  const {getByTestId} = render(<ExternalLink href="google.com" />);
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
