import React from 'react';

import Table from '.';

export default {
  title: 'Core/Table',
  component: Table,
};

export const Default = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.DataCell>Mark</Table.DataCell>
        <Table.DataCell>mark@gmail.com</Table.DataCell>
        <Table.DataCell>admin</Table.DataCell>
      </Table.Row>
      <Table.Row>
        <Table.DataCell>Claire</Table.DataCell>
        <Table.DataCell>claire@gmail.com</Table.DataCell>
        <Table.DataCell>editor</Table.DataCell>
      </Table.Row>
    </Table.Body>
  </Table>
);
