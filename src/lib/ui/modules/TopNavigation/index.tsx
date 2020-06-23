import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent} from 'lib/@types';
import Logo from 'lib/assets/logo/MGNC_Logo.svg';
import ActionNavigation from './components/ActionNavigation';
import PrimaryNavigation from './components/PrimaryNavigation';
import paths from 'providers/RouterProvider/paths';
import {NavLink} from 'lib/ui/core';

export interface TopNavigationProps
  extends TestableComponent,
    React.HTMLAttributes<HTMLDivElement> {}

const Navigation = styled.div`
  padding: 1.5rem 3rem 0;
  color: ${props => props.theme.color.common.white};
  background: ${props => props.theme.color.primary.main};
`;

const NavigationWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
  flex-shrink: 0;
`;
const NavigationImage = styled.div`
  display: flex;
  align-self: center;
  flex-grow: 0;
  max-width: 250px;
  padding-bottom: 1.5rem;
`;
const NavigationNav = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
`;

const ActionNavStyles = `
  justify-content: flex-end;
  margin-bottom: .5rem;
  `;

const PrimaryNavStyles = `
  justify-content: flex-end;
`;

export const TopNavigation = ({
  'data-testid': testId = 'top-navigation',
  ...rest
}: TopNavigationProps) => (
  <Navigation data-testid={testId} {...rest}>
    <NavigationWrapper>
      <NavigationImage>
        <NavLink to={paths.dashboard}>
          <img alt="Constellation Logo" src={Logo} />
        </NavLink>
      </NavigationImage>
      <NavigationNav>
        <ActionNavigation classes={{navigation: ActionNavStyles}} />
        <PrimaryNavigation classes={{navigation: PrimaryNavStyles}} />
      </NavigationNav>
    </NavigationWrapper>
  </Navigation>
);

export default TopNavigation;
