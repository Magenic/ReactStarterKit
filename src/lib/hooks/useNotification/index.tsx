import {toast} from 'react-toastify';

export const useNotification = () => (value: string) => {
  toast(value);
};

export default useNotification;
