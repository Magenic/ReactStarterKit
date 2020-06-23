import React from 'react';
import {
  render,
  cleanup,
} from 'providers/TestingProvider/helpers/testing-library-utils';
import Table from '.';

afterEach(cleanup);

const testIds = {
  table: 'table',
  tableHead: 'table-head',
  tableBody: 'table-body',
  tableHeaderCell: 'table-header-cell',
  tableDataCell: 'table-data-cell',
  tableRowHead: 'table-row-head',
  tableRowBody: 'table-row-body',
};

test('<Table/> renders', () => {
  const headerColumnChildTestId = 'header-column-child';
  const bodyColumnChildTestId = 'body-column-child';

  const {getByTestId} = render(
    <Table>
      <Table.Head>
        <Table.Row data-testid={testIds.tableRowHead}>
          <Table.HeaderCell>
            <span data-testid={headerColumnChildTestId}>Name</span>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row data-testid={testIds.tableRowBody}>
          <Table.DataCell>
            <span data-testid={bodyColumnChildTestId}>Mark</span>
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  const table = getByTestId(testIds.table);
  const tableHead = getByTestId(testIds.tableHead);
  const tableBody = getByTestId(testIds.tableBody);
  const tableHeaderCell = getByTestId(testIds.tableHeaderCell);
  const tableDataCell = getByTestId(testIds.tableDataCell);
  const tableRowHead = getByTestId(testIds.tableRowHead);
  const tableRowBody = getByTestId(testIds.tableRowBody);
  const headerColumnChild = getByTestId(headerColumnChildTestId);
  const bodyColumnChild = getByTestId(bodyColumnChildTestId);

  expect(table).toBeInTheDocument();
  expect(tableHead).toBeInTheDocument();
  expect(tableBody).toBeInTheDocument();
  expect(tableHeaderCell).toBeInTheDocument();
  expect(tableDataCell).toBeInTheDocument();
  expect(tableRowHead).toBeInTheDocument();
  expect(tableRowBody).toBeInTheDocument();
  expect(headerColumnChild).toBeInTheDocument();
  expect(bodyColumnChild).toBeInTheDocument();
});
