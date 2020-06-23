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

export const TableHead = ({
  'data-testid': testId = 'table-head',
  children,
  ...rest
}: TableHeadProps) => {
  return (
    <StyledTableHead data-testid={testId} {...rest}>
      {children}
    </StyledTableHead>
  );
};

export default TableHead;
