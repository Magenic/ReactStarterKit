import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> &
  ComponentWithChildren &
  TestableComponent;

const StyledTableRow = styled.tr`
  border: 1px solid orange;
  padding: 0.5em;
`;

export const TableRow = ({
  'data-testid': testId = 'table-row',
  children,
  ...rest
}: TableRowProps) => {
  return (
    <StyledTableRow data-testid={testId} {...rest}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
