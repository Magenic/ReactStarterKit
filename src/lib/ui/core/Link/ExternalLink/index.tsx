import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import sharedStyles from '../sharedStyles';

export interface ExternalLinkProps
  extends ComponentWithChildren,
    TestableComponent,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: HTMLAnchorElement['href'];
}

const StyledLink = styled.a`
  ${sharedStyles}
`;

export const ExternalLink = ({
  'data-testid': testId = 'external-link',
  href,
  ...rest
}: ExternalLinkProps) => {
  return <StyledLink data-testid={testId} href={`https://${href}`} {...rest} />;
};

export default ExternalLink;
