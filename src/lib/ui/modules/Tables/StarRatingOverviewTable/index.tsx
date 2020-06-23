import React from 'react';
import {isEmpty, isUndefined} from 'lodash';

import {Contract} from 'data/contracts';
import {Table, Skeleton} from 'lib/ui/core';

export interface ContractsTableProps {
  contracts: Contract[];
  loading?: boolean;
}

const generateTableSkeleton = () => {
  const loadingSkeleton = [];
  for (let step = 0; step < 10; step++) {
    loadingSkeleton.push(
      <Table.Row key={`skeleton-row-${step}`}>
        <Table.DataCell width="10%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="60%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="10%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="10%">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell width="10%">
          <Skeleton />
        </Table.DataCell>
      </Table.Row>
    );
  }
  return loadingSkeleton;
};

export const StarRatingOverviewTable = ({
  contracts,
  loading = false,
}: ContractsTableProps) => {
  const renderTableContent = () => {
    if (!isEmpty(contracts) && !loading) {
      return contracts.map(contract => (
        <Table.Row key={contract.contractNumber}>
          <Table.DataCell>{contract.contractNumber}</Table.DataCell>
          <Table.DataCell>{contract.parentOrganization}</Table.DataCell>
          <Table.DataCell>
            {!isUndefined(contract.ratings) && contract.ratings[0].partCSummary}
          </Table.DataCell>
          <Table.DataCell>
            {!isUndefined(contract.ratings) && contract.ratings[0].partDSummary}
          </Table.DataCell>
          <Table.DataCell>
            {!isUndefined(contract.ratings) && contract.ratings[0].overall}
          </Table.DataCell>
        </Table.Row>
      ));
    } else {
      return generateTableSkeleton();
    }
  };

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Contract</Table.HeaderCell>
          <Table.HeaderCell>Parent Org</Table.HeaderCell>
          <Table.HeaderCell>Part C</Table.HeaderCell>
          <Table.HeaderCell>Part D</Table.HeaderCell>
          <Table.HeaderCell>Summary</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{renderTableContent()}</Table.Body>
    </Table>
  );
};

export default StarRatingOverviewTable;
