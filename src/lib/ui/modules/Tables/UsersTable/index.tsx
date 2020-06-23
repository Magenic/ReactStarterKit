import React from 'react';

import {UserModel} from 'data/user';
import {isEmpty} from 'lodash';
import {Table, Skeleton} from 'lib/ui/core';

export interface UserTableProps {
  users: UserModel[];
  loading?: boolean;
}

const generateUsersTableSkeleton = () => {
  const loadingSkeleton = [];
  for (let step = 0; step < 10; step++) {
    loadingSkeleton.push(
      <Table.Row>
        <Table.DataCell width="15%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="20%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="50%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="15%">
          <Skeleton />
        </Table.DataCell>
      </Table.Row>
    );
  }
  return loadingSkeleton;
};

export const UsersTable = ({users, loading = false}: UserTableProps) => {
  const renderTableContent = () => {
    if (!isEmpty(users) && !loading) {
      return users.map((item: UserModel) => (
        <Table.Row key={item.uuid}>
          <Table.DataCell>{item.firstName}</Table.DataCell>
          <Table.DataCell>{item.lastName}</Table.DataCell>
          <Table.DataCell>{item.email}</Table.DataCell>
          <Table.DataCell>{item.role}</Table.DataCell>
        </Table.Row>
      ));
    } else {
      return generateUsersTableSkeleton();
    }
  };

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{renderTableContent()}</Table.Body>
    </Table>
  );
};

export default UsersTable;
