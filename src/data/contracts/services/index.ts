import {createAxiosConfig} from 'lib/utils';

export * from './useContractsServices';

export const getContractsAxiosConfig = createAxiosConfig({
  method: 'get',
  url: '/contracts',
});

export const getContractByContractNumberAxiosConfig = createAxiosConfig({
  method: 'get',
  url: '/contracts',
});

export const getContractsByContractNumbersAxiosConfig = createAxiosConfig({
  method: 'get',
  url: '/contracts',
});
