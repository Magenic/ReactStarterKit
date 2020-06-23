import {createAxiosConfig} from 'lib/utils';

export * from './useUserServices';

export const getUsersAxiosConfig = createAxiosConfig({
  method: 'get',
  url: '/users',
});

export const getUserByIdAxiosConfig = createAxiosConfig({
  method: 'get',
  url: '/users',
});

export const createUserAxiosConfig = createAxiosConfig({
  method: 'post',
  url: '/users',
});
