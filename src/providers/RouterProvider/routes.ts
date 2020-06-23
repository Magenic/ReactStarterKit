import DashboardPage from 'pages/Dashboard';
import UsersPage from 'pages/Users';
import CreateUserPage from 'pages/Users/CreateUser';
import ContractsPage from 'pages/Contracts';
import ReportingPage from 'pages/Reporting';

import paths from './paths';

import createRouteConfig from 'providers/RouterProvider/utils/createRouteConfig';

const routes = createRouteConfig([
  {
    path: paths.dashboard,
    exact: true,
    component: DashboardPage,
  },
  {
    path: paths.contracts,
    exact: true,
    component: ContractsPage,
  },
  {
    path: paths.reporting,
    exact: true,
    component: ReportingPage,
  },
  {
    path: paths.users,
    exact: true,
    component: UsersPage,
  },
  {
    path: paths.createUser,
    exact: true,
    component: CreateUserPage,
  },
]);

export default routes;
