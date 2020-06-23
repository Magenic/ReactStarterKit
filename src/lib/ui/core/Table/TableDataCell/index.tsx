import React from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import {isNull} from 'lodash';

export interface TableDataCellProps
  extends React.TableHTMLAttributes<HTMLTableDataCellElement>,
    ComponentWithChildren,
    TestableComponent {
  width?: null | string;
}

const StyledTableDataCell = styled.td<TableDataCellProps>`
  border-bottom: 1px solid lightgray;
  padding: 1em 0.5em 0.5em;

  ${props => !isNull(props.width) && `width: ${props.width}`};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const TableDataCell = ({
  'data-testid': testId = 'table-data-cell',
  children,
  width = null,
  ...rest
}: TableDataCellProps) => {
  return (
    <StyledTableDataCell data-testid={testId} width={width} {...rest}>
      {children}
    </StyledTableDataCell>
  );
};

export default TableDataCell;
