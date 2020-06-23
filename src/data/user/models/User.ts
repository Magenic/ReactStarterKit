import {UserRole} from './UserRole';

export interface UserModel {
  readonly uuid: string;
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly role: UserRole;
}
