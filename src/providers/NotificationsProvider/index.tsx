import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type NotificationsProviderProps = React.PropsWithChildren<{}>;

const NotificationsProvider = ({children}: NotificationsProviderProps) => {
  toast.configure();
  return <>{children}</>;
};

export default NotificationsProvider;
