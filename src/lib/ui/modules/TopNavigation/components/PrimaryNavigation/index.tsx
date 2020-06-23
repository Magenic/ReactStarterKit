import React from 'react';

import styled from 'styled-components/macro';
import {TestableComponent} from 'lib/@types';

import PrimaryNavigationLink from './PrimaryNavigationLink';
import paths from 'providers/RouterProvider/paths';

export interface PrimaryNavigationProps
  extends TestableComponent,
    React.HTMLAttributes<HTMLDivElement> {
  classes?: {navigation?: string};
}

const Navigation = styled.nav<{classes?: string}>`
  display: flex;
  font-size: ${props => props.theme.fontSize[18]};
  text-transform: uppercase;
  letter-spacing: 1px;
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

export const PrimaryNavigation = ({
  'data-testid': testId = 'Primary-navigation',
  classes = {},
  ...rest
}: PrimaryNavigationProps) => {
  return (
    <Navigation classes={classes.navigation}>
      <NavigationList>
        <NavigationListItem>
          <PrimaryNavigationLink to={paths.dashboard}>
            Dashboard
          </PrimaryNavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <PrimaryNavigationLink to={paths.contracts}>
            Contracts
          </PrimaryNavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <PrimaryNavigationLink to={paths.reporting}>
            Reporting
          </PrimaryNavigationLink>
        </NavigationListItem>
      </NavigationList>
    </Navigation>
  );
};

export default PrimaryNavigation;
