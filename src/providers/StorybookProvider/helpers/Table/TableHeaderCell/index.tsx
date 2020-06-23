import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type TableHeaderCellProps = React.TableHTMLAttributes<
  HTMLTableHeaderCellElement
> &
  ComponentWithChildren &
  TestableComponent;

const StyledTableHeaderCell = styled.th`
  border-bottom: 1px solid gray;
  padding: 1em 0.5em 0.5em;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const TableHeaderCell = ({children, ...rest}: TableHeaderCellProps) => {
  return <StyledTableHeaderCell {...rest}>{children}</StyledTableHeaderCell>;
};

export default TableHeaderCell;
