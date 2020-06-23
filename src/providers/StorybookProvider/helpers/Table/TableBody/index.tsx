import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type TableBodyProps = React.TableHTMLAttributes<
  HTMLTableSectionElement
> &
  ComponentWithChildren &
  TestableComponent;

const StyledTableBody = styled.tbody``;

export const TableBody = ({children, ...rest}: TableBodyProps) => {
  return <StyledTableBody {...rest}>{children}</StyledTableBody>;
};

export default TableBody;
