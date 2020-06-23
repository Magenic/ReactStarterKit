import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent} from 'lib/@types';

export interface AppFooterProps
  extends TestableComponent,
    React.HTMLAttributes<HTMLDivElement> {}

const StyledFooter = styled.footer`
  padding: 0.5rem;
  font-size: 0.5rem;
  text-align: center;
  color: ${props => props.theme.color.common.black};
  background: ${props => props.theme.color.background.app};
  flex-shrink: 0;
`;

export const AppFooter = ({
  'data-testid': testId = 'app-footer',
  ...rest
}: AppFooterProps) => (
  <StyledFooter data-testid={testId} {...rest}>
    © 2020 Express Scripts Holding Company. All Rights Reserved. 1 Express Way,
    St. Louis, MO 63121
  </StyledFooter>
);

export default AppFooter;
