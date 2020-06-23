import React from 'react';
import {useDocumentTitle} from 'lib/hooks';
import {Paper, PageWrapper} from 'lib/ui/core';

export const NotFoundPage = () => {
  useDocumentTitle('Page Not Found');

  return (
    <PageWrapper>
      <PageWrapper.Header>
        <h1>NotFoundPage</h1>
      </PageWrapper.Header>
      <PageWrapper.Body>
        <PageWrapper.Body.Main>
          <Paper>Opps. Looks like you are lost</Paper>
        </PageWrapper.Body.Main>
      </PageWrapper.Body>
    </PageWrapper>
  );
};

export default NotFoundPage;
