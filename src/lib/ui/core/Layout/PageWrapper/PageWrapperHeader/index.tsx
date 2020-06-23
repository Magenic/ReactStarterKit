import React from 'react';
import styled from 'styled-components/macro';

import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type PageWrapperHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledPageWrapperHeader = styled.div`
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

export const PageWrapperHeader = (props: PageWrapperHeaderProps) => {
  return <StyledPageWrapperHeader {...props} />;
};

export default PageWrapperHeader;
