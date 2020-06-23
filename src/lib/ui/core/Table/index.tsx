import React, {Component} from 'react';
import styled from 'styled-components/macro';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';
import TableDataCell from './TableDataCell';
import TableHead from './TableHead';
import TableBody from './TableBody';

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    ComponentWithChildren,
    TestableComponent {
  fullWidth?: boolean;
}

const StyledTable = styled.table<TableProps>`
  border-spacing: 0;
  margin: auto;
  padding: 0.5em;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`;

export class Table extends Component<TableProps> {
  static Head = TableHead;
  static Body = TableBody;
  static Row = TableRow;
  static HeaderCell = TableHeaderCell;
  static DataCell = TableDataCell;

  static defaultProps = {fullWidth: true};

  render() {
    const {'data-testid': testId = 'table', children, ...rest} = this.props;
    return (
      <StyledTable data-testid={testId} {...rest}>
        {children}
      </StyledTable>
    );
  }
}

export default Table;
