import React from 'react';
import {Table} from 'providers/StorybookProvider/helpers';
import breakpoints from '.';

export default {
  title: 'Configs/Breakpoints',
};

export const Breakpoints = () => (
  <Table style={{width: '400px'}}>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell>Label</Table.HeaderCell>
        <Table.HeaderCell>Width</Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {Object.keys(breakpoints).map(breakpoint => (
        <Table.Row>
          <Table.DataCell>
            <strong>{breakpoint}</strong>
          </Table.DataCell>
          <Table.DataCell>{breakpoints[breakpoint]}</Table.DataCell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
