import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type PageWrapperFooterProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledPageWrapperFooter = styled.div`
  margin-top: 1rem;
  flex-shrink: 0;
`;

export const PageWrapperFooter = (props: PageWrapperFooterProps) => {
  return <StyledPageWrapperFooter {...props} />;
};

export default PageWrapperFooter;
