import React from 'react';

import {useDocumentTitle} from 'lib/hooks';
import {PageWrapper, Paper} from 'lib/ui/core';

export const ContractsPage = () => {
  useDocumentTitle('Contracts');

  return (
    <PageWrapper>
      <PageWrapper.Header>
        <h1>Contracts Page</h1>
      </PageWrapper.Header>
      <PageWrapper.Body>
        <Paper>Dashboard Page Body</Paper>
      </PageWrapper.Body>
    </PageWrapper>
  );
};

export default ContractsPage;
