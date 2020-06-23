import {
  RouteProps as ReactRouterRouteProps,
  RouteComponentProps as ReactRouterRouteComponentProps,
} from 'react-router-dom';
import {ApprovedAny} from 'lib/@types/ApprovedAny';

export type RouteComponentProp = React.ComponentType<
  ReactRouterRouteComponentProps<ApprovedAny> & RoutePropsRoutes
>;

export type RouteRoutesProp = RouteProps[];

export interface RouteProps extends Omit<ReactRouterRouteProps, 'component'> {
  component: RouteComponentProp;
  routes?: RouteProps[];
}

export type RoutePropsRoutes = Pick<RouteProps, 'routes'>;
