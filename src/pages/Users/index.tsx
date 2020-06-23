import React from 'react';
import styled from 'styled-components/macro';

import {isNull} from 'lodash';
import {Paper, PageWrapper} from 'lib/ui/core';
import {useDocumentTitle} from 'lib/hooks';

import {Link} from 'react-router-dom';
import {paths} from 'providers/RouterProvider/paths';
import {UsersTable} from 'lib/ui/modules';
import useFetchEffect from 'lib/hooks/useFetchEffect';

import {useUserService} from 'data/user/services';

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;

export const UsersPage = () => {
  useDocumentTitle('Manage Users');

  const {getUsers} = useUserService();

  useFetchEffect(getUsers, () => {
    getUsers.dispatch();
  });

  const {
    state: {loading, error, data},
  } = getUsers;

  return (
    <PageWrapper>
      <PageWrapper.Header>
        <h1>Users Page</h1>
        <Link to={paths.createUser}>Add New User</Link>
      </PageWrapper.Header>
      <PageWrapper.Body>
        <PageWrapper.Body.Main>
          {!isNull(error) && error.message}
          <StyledPaper>
            <UsersTable users={data || []} loading={loading} />
          </StyledPaper>
        </PageWrapper.Body.Main>
      </PageWrapper.Body>
    </PageWrapper>
  );
};

export default UsersPage;
