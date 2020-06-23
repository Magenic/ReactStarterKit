import React from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';

import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import styled from 'styled-components/macro';

import sharedStyles from '../sharedStyles';

export interface InternalLinkProps
  extends ComponentWithChildren,
    TestableComponent,
    LinkProps {}

const StyledRouterLink = styled(RouterLink)<InternalLinkProps>`
  ${sharedStyles}
`;

export const InternalLink = ({
  'data-testid': testId = 'internal-link',
  children,
  ...rest
}: InternalLinkProps) => {
  return (
    <StyledRouterLink data-testid={testId} {...rest}>
      {children}
    </StyledRouterLink>
  );
};

export default InternalLink;
