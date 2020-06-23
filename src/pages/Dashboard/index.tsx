import React from 'react';

import {useDocumentTitle} from 'lib/hooks';
import {Paper, PageWrapper, SolidButton} from 'lib/ui/core';
import {StarRatingOverviewTable} from 'lib/ui/modules';

import {isNull} from 'lodash';
import {
  StartRatingTrendSimpleLineChart,
  EnrollmentTrendSimpleLineChart,
} from 'lib/ui/modules';
import useFetchEffect from 'lib/hooks/useFetchEffect';
import {useContractsServices} from 'data/contracts/services';

export const DashboardPage = () => {
  useDocumentTitle('Dashboard');

  const {getContracts} = useContractsServices();

  useFetchEffect(getContracts, () => {
    getContracts.dispatch();
  });

  return (
    <PageWrapper>
      <PageWrapper.Header>
        <h1>Dashboard Page</h1>
      </PageWrapper.Header>
      <PageWrapper.Body>
        <PageWrapper.Body.Sidebar>
          <Paper>
            <h4>Modify Summary</h4>
            <label htmlFor="contracts">Contracts</label>
            <select name="contracts" id="contracts" multiple>
              <option value="" disabled>
                Select Contracts
              </option>
              <option value="h4569">H4569</option>
              <option value="h1234">H1234</option>
              <option value="h3523">H3523</option>
              <option value="h0095">H0095</option>
              <option value="h3485">H3485</option>
            </select>
            <SolidButton disabled>Save Summary</SolidButton>
          </Paper>
        </PageWrapper.Body.Sidebar>
        <PageWrapper.Body.Main>
          <Paper>
            {!isNull(getContracts.state.error) &&
              getContracts.state.error.message}
            <h3>2019 Star Rating Overview</h3>
            <StarRatingOverviewTable
              contracts={getContracts.state.data || []}
              loading={getContracts.state.loading}
            />
          </Paper>
          <br />
          <Paper>
            <h3>Star Rating Trend</h3>
            <StartRatingTrendSimpleLineChart />
          </Paper>
          <br />
          <Paper>
            <h3>Enrollment Trend</h3>
            <EnrollmentTrendSimpleLineChart />
          </Paper>
        </PageWrapper.Body.Main>
      </PageWrapper.Body>
    </PageWrapper>
  );
};

export default DashboardPage;
