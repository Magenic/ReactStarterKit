import React from 'react';
import styled from 'styled-components/macro';

import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type PageWrapperBodySidebarProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledPageWrapperBodySidebar = styled.div`
  width: 230px;
  margin-right: 2.5rem;
`;

export const PageWrapperBodySidebar = (props: PageWrapperBodySidebarProps) => {
  return <StyledPageWrapperBodySidebar {...props} />;
};

export default PageWrapperBodySidebar;
