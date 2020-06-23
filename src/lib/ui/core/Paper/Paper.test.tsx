import React from 'react';
import {
  render,
  cleanup,
} from 'providers/TestingProvider/helpers/testing-library-utils';

import Paper from '.';
import PaperConfig from './paper.config';

afterEach(cleanup);

const testId = 'paper';

test('<Paper/> renders', () => {
  const {getByTestId} = render(
    <Paper>
      <h1>This is an example of a paper component</h1>
    </Paper>
  );
  const element = getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element.firstElementChild?.innerHTML).toBe(
    'This is an example of a paper component'
  );
});

test('<Paper/> styles', () => {
  const {getByTestId} = render(
    <Paper>
      <h1>This is an example of a paper component</h1>
    </Paper>
  );
  const element = getByTestId(testId);
  expect(element).toHaveStyle(`padding: ${PaperConfig.padding}`);
  expect(element).toHaveStyle(
    `border: '${PaperConfig.border.width} ${PaperConfig.border.style} ${PaperConfig.border.color}'`
  );
  expect(element).toHaveStyle(`border-radius: ${PaperConfig.border.radius}`);
  expect(element).toHaveStyle(
    `background-color: ${PaperConfig.background.color}`
  );
});
