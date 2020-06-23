import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage';

import routeIterator from './utils/routeIterator';
import routes from './routes';
import {AppFooter} from 'lib/ui/modules';

type RouterProviderProps = React.PropsWithChildren<{}>;

const RouterProvider = ({children}: RouterProviderProps) => {
  return (
    <Router>
      {children}
      <Switch>
        {routeIterator({routes})}
        <Route path="/404" component={NotFoundPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <AppFooter />
    </Router>
  );
};

export default RouterProvider;
