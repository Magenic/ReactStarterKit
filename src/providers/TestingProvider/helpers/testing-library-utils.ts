/* eslint-disable no-restricted-imports */
import React from 'react';
import {render, RenderOptions, RenderResult} from '@testing-library/react';

import TestingProvider from 'providers/TestingProvider';

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, {wrapper: TestingProvider, ...options});

// re-export everything
export * from '@testing-library/react';

// override render method
export {customRender as render};
