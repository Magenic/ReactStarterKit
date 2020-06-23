import {useState} from 'react';
import axios, {
  AxiosPromise,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';
import {ApprovedAny} from 'lib/@types';
import {useNotification} from '../';
import useIsMounted from '../useIsMounted';

export type FetchPromise<ResponseData = ApprovedAny> = AxiosPromise<
  ResponseData
>;
export type FetchResponse<ResponseData = ApprovedAny> = AxiosResponse<
  ResponseData
>;
export type FetchError<ResponseData = ApprovedAny> = AxiosError<ResponseData>;
export type FetchConfig = AxiosRequestConfig;

export interface UseFetchDispatchCallbacks<ResponseData = ApprovedAny> {
  onSuccess?: (response: FetchResponse<ResponseData>) => void;
  onFailure?: (error: FetchError<ResponseData>) => void;
  onFinally?: () => void;
}

export type UseFetchParams = Parameters<typeof useFetch>;
export type UseFetchReturn = ReturnType<typeof useFetch>;

export function useFetch<ResponseData = ApprovedAny>(config: FetchConfig) {
  // Api Promise Handling Lifecycle State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | FetchError<ResponseData>>(null);
  const [data, setData] = useState<null | ResponseData>(null);

  // Check component is mounted
  const {validateIsMounted} = useIsMounted();

  // Use Notifications
  const notify = useNotification();

  // Set Up Axios Request
  const API_BASE_URL = 'http://localhost:3008/';
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  // Dispatch Axios Request Function
  const dispatch = (
    configOverrides?: FetchConfig,
    {
      onSuccess,
      onFailure,
      onFinally,
    }: UseFetchDispatchCallbacks<ResponseData> = {}
  ) => {
    const axiosConfig = Object.assign(
      {},
      {baseURL: API_BASE_URL, cancelToken: source.token},
      config,
      configOverrides
    ) as FetchConfig;

    // Initialize State
    validateIsMounted(() => {
      setLoading(true);
      setError(null);
    });

    return axios(axiosConfig)
      .then((res: FetchResponse<ResponseData>) => {
        validateIsMounted(() => {
          // Update State
          setData(res.data);
          // Extend 'onSuccess' Callbacks
          onSuccess && onSuccess(res);
        });
      })
      .catch((error: FetchError<ResponseData>) => {
        validateIsMounted(() => {
          // Update State
          setError(error);
          // Notify User Of Error
          notify(`Error: ${error.message}`);
          // Extend 'onFailure' Callbacks
          onFailure && onFailure(error);
        });
      })
      .finally(() => {
        validateIsMounted(() => {
          // Update State
          setLoading(false);
          // Extend 'onFailure' Callbacks
          onFinally && onFinally();
        });
      });
  };

  const cancel = () => source.cancel('Api Request Cancelled');

  return {
    dispatch,
    cancel,
    state: {loading, error, data},
  };
}

export default useFetch;
