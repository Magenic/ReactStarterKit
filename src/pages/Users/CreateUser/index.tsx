import React from 'react';
import {useHistory} from 'react-router-dom';

import {useDocumentTitle} from 'lib/hooks';
import {PageWrapper, Paper} from 'lib/ui/core';
import {CreateUserForm} from 'lib/ui/modules/Forms';
import paths from 'providers/RouterProvider/paths';

export const CreateUserPage = () => {
  useDocumentTitle('Add User');
  const history = useHistory();

  const handleSuccessfulSubmission = () => {
    history.push(paths.users);
  };

  return (
    <PageWrapper>
      <PageWrapper.Body>
        <Paper>
          <CreateUserForm onSuccess={handleSuccessfulSubmission} />
        </Paper>
      </PageWrapper.Body>
    </PageWrapper>
  );
};

export default CreateUserPage;
