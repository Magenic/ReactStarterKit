import {useLocation, LinkProps} from 'react-router-dom';

export const useRouterLocation = () => {
  const location = useLocation();
  const isCurrentRoute = (route: LinkProps['to']) =>
    route === location.pathname;

  return {
    ...location,
    isCurrentRoute,
  };
};

export default useRouterLocation;
