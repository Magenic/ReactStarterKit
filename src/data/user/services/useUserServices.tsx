import {useFetch} from 'lib/hooks';
import {UserModel} from 'data/user/models';
import {
  getUsersAxiosConfig,
  getUserByIdAxiosConfig,
  createUserAxiosConfig,
} from 'data/user/services';

export const useUserService = () => {
  const getUsers = useFetch<UserModel[]>(getUsersAxiosConfig);
  const getUserById = useFetch<UserModel>(getUserByIdAxiosConfig);
  const createUser = useFetch<UserModel>(createUserAxiosConfig);
  return {getUsers, createUser, getUserById};
};

export default useUserService;
