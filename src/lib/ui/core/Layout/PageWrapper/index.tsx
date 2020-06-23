import React, {Component} from 'react';
import styled from 'styled-components/macro';

import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import PageWrapperHeader from './PageWrapperHeader';
import PageWrapperBody from './PageWrapperBody';
import PageWrapperFooter from './PageWrapperFooter';

export type PageWrapperProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledPageWrapper = styled.div<PageWrapperProps>`
  flex: 1 0 auto;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export class PageWrapper extends Component<PageWrapperProps> {
  static Header = PageWrapperHeader;
  static Body = PageWrapperBody;
  static Footer = PageWrapperFooter;

  render() {
    const {children, ...rest} = this.props;
    return <StyledPageWrapper {...rest}>{children}</StyledPageWrapper>;
  }
}

export default PageWrapper;
