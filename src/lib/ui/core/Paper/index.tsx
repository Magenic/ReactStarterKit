import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import PaperConfig from './paper.config';

export type PaperProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledPaper = styled.div`
  padding: ${PaperConfig.padding};
  border-width: ${PaperConfig.border.width};
  border-style: ${PaperConfig.border.style};
  border-color: ${PaperConfig.border.color};
  border-radius: ${PaperConfig.border.radius};
  background-color: ${PaperConfig.background.color};
`;

export const Paper = ({
  'data-testid': testId = 'paper',
  children,
  ...rest
}: PaperProps) => (
  <StyledPaper data-testid={testId} {...rest}>
    {children}
  </StyledPaper>
);

export default Paper;
