import React from 'react';
// import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';
import {TestableComponent} from 'lib/@types';
import paths from 'providers/RouterProvider/paths';
import {NavLink} from 'lib/ui/core';

export interface ActionNavigationProps
  extends TestableComponent,
    React.HTMLAttributes<HTMLDivElement> {
  classes?: {navigation?: string};
}

const Navigation = styled.nav<{classes?: string}>`
  display: flex;
  font-size: ${props => props.theme.fontSize[14]};
  ${props => props.classes}
`;

const NavigationList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationListItem = styled.li`
  display: flex;
`;

const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.color.common.white};
  text-decoration: none;
  padding: 5px 0.5em;

  &:hover {
    text-decoration: underline;
  }

  &.is-active {
    text-decoration: underline;
  }
`;

export const ActionNavigation = ({
  'data-testid': testId = 'action-navigation',
  classes = {},
  ...rest
}: ActionNavigationProps) => (
  <Navigation classes={classes.navigation}>
    <NavigationList>
      <NavigationListItem>
        <NavigationLink to={paths.users}>Manage Users</NavigationLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavigationLink to="/about">Manage Files</NavigationLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavigationLink to="/profile">Paul Geoffrion</NavigationLink>
      </NavigationListItem>
    </NavigationList>
  </Navigation>
);

export default ActionNavigation;
