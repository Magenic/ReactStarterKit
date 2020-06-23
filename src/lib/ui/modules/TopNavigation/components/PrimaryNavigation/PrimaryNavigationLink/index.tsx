import React from 'react';
import styled from 'styled-components/macro';
import NavLink, {NavLinkProps} from 'lib/ui/core/Navigation/NavLink';
import {useRouterLocation} from 'lib/hooks';
import {ReactComponent as CarrotDownIcon} from 'lib/assets/icons/caretDownIcon.svg';

export interface PrimaryNavigationLinkProps extends NavLinkProps {
  active?: boolean;
}

const StyledNavLink = styled(({active, ...rest}) => <NavLink {...rest} />)<
  PrimaryNavigationLinkProps
>`
  position: relative;
  color: ${props =>
    props.active
      ? props.theme.color.common.white
      : props.theme.color.primary.light};
  text-decoration: none;
  padding: 0.5rem 0.5rem 1rem 0.5rem;

  &:hover {
    color: ${props => props.theme.color.common.white};
  }
`;

const StyledIcon = styled(CarrotDownIcon)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  margin: auto;
  width: 0.85em;
  fill: ${props => props.theme.color.background.app};
  transform: rotate(180deg);
`;

export const PrimaryNavigationLink = ({
  'data-testid': testId = 'navigation-link',
  children,
  to,
  ...rest
}: PrimaryNavigationLinkProps) => {
  const {isCurrentRoute} = useRouterLocation();
  const isActive = isCurrentRoute(to);
  return (
    <StyledNavLink to={to} active={isActive} {...rest}>
      {children}
      {isActive && <StyledIcon />}
    </StyledNavLink>
  );
};

export default PrimaryNavigationLink;
