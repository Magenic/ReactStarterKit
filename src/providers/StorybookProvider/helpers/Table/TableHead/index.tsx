import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type TableHeadProps = React.TableHTMLAttributes<
  HTMLTableSectionElement
> &
  ComponentWithChildren &
  TestableComponent;

const StyledTableHead = styled.thead`
  text-align: left;
`;

export const TableHead = ({children, ...rest}: TableHeadProps) => {
  return <StyledTableHead {...rest}>{children}</StyledTableHead>;
};

export default TableHead;
