import React from 'react';
import clsx from 'clsx';
import {Link as RouterLink, LinkProps} from 'react-router-dom';

import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import {useRouterLocation} from 'lib/hooks';
import styled from 'styled-components/macro';

export interface NavLinkProps
  extends ComponentWithChildren,
    TestableComponent,
    LinkProps {}

const StyledRouterLink = styled(RouterLink)<NavLinkProps>`
  &:hover {
    cursor: pointer;
  }
`;

export const NavLink = ({
  'data-testid': testId = 'navigation-link',
  children,
  to,
  className,
  ...rest
}: NavLinkProps) => {
  const {isCurrentRoute} = useRouterLocation();

  const isActive = isCurrentRoute(to);
  const classes = clsx(className, isActive && 'is-active');

  return (
    <StyledRouterLink to={to} className={classes} {...rest}>
      {children}
    </StyledRouterLink>
  );
};

export default NavLink;
