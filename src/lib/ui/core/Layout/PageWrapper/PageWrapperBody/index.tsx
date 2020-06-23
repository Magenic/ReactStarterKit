import React, {Component} from 'react';
import styled from 'styled-components/macro';
import {
  TestableComponent,
  ComponentWithChildren,
  ApprovedAny,
} from 'lib/@types';
import PageWrapperBodySidebar from './PageWrapperBodySidebar';
import PageWrapperBodyMain from './PageWrapperBodyMain';

export type PageWrapperBodyProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentWithChildren &
  TestableComponent;

interface PageWrapperBodyStyleProps {
  variant?: 'sidebar' | 'default';
}

const StyledPageWrapperBody = styled.div<PageWrapperBodyStyleProps>`
  flex: 1 1 auto;
  ${props => props.variant === 'sidebar' && 'display: flex;'};
`;

export class PageWrapperBody extends Component<PageWrapperBodyProps> {
  static Sidebar = PageWrapperBodySidebar;
  static Main = PageWrapperBodyMain;

  render() {
    const {children, ...rest} = this.props;
    const hasSidebar =
      Array.isArray(children) &&
      children.some(
        (child: ApprovedAny) => child.type === PageWrapperBodySidebar
      );

    return (
      <StyledPageWrapperBody
        variant={hasSidebar ? 'sidebar' : 'default'}
        {...rest}
      >
        {children}
      </StyledPageWrapperBody>
    );
  }
}

export default PageWrapperBody;
