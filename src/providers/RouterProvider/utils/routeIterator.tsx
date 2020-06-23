import React from 'react';
import {Route} from 'react-router-dom';

import {RoutePropsRoutes} from './@types';

export type RouteIteratorProps = Required<RoutePropsRoutes>;

const routeIterator = ({routes}: RouteIteratorProps) =>
  routes.map(({path, routes, component: Component, ...restProps}, i) => (
    <Route
      key={i}
      path={path}
      render={renderProps => <Component {...renderProps} routes={routes} />}
      {...restProps}
    />
  ));
export default routeIterator;
