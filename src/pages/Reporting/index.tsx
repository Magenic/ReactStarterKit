import React from 'react';

import {useDocumentTitle} from 'lib/hooks';
import {PageWrapper, Paper} from 'lib/ui/core';

export const ReportingPage = () => {
  useDocumentTitle('Reporting');

  return (
    <PageWrapper>
      <PageWrapper.Header>
        <h1>Reporting Page</h1>
      </PageWrapper.Header>
      <PageWrapper.Body>
        <Paper>Reporting Page Body</Paper>
      </PageWrapper.Body>
    </PageWrapper>
  );
};

export default ReportingPage;
