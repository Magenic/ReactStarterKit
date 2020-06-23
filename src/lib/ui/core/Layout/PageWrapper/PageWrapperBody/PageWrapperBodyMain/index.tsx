import React from 'react';
import styled from 'styled-components/macro';

import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type PageWrapperBodyMainProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledPageWrapperBodyMain = styled.div`
  flex: 1 1 auto;
`;

export const PageWrapperBodyMain = (props: PageWrapperBodyMainProps) => {
  return <StyledPageWrapperBodyMain {...props} />;
};

export default PageWrapperBodyMain;
