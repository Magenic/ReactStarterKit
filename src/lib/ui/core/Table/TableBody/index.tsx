import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type TableBodyProps = React.TableHTMLAttributes<
  HTMLTableSectionElement
> &
  ComponentWithChildren &
  TestableComponent;

const StyledTableBody = styled.tbody``;

export const TableBody = ({
  'data-testid': testId = 'table-body',
  children,
  ...rest
}: TableBodyProps) => {
  return (
    <StyledTableBody data-testid={testId} {...rest}>
      {children}
    </StyledTableBody>
  );
};

export default TableBody;
