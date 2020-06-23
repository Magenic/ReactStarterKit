import React from 'react';
import {UsersTable} from '.';
import {UserModel} from 'data/user';

export default {
  title: 'Modules/Tables/Users Table',
  component: UsersTable,
};

const data = [
  {
    username: 'Internal',
    email: 'internal@gmail.com',
    firstName: 'Jovanny',
    lastName: 'Douglas',
    role: 'internal',
    uuid: '4ed16839-6f4b-4705-b41c-2c1866481b85',
  },
  {
    username: 'External',
    firstName: 'Helga',
    lastName: 'Schulist',
    email: 'external@gmail.com',
    role: 'external',
    uuid: '7cdf0132-ff73-4472-8516-c1891d27e12f',
  },
  {
    username: 'Sigurd.Wiza',
    firstName: 'Gregoria',
    lastName: 'Spinka',
    email: 'Muller.Drake@Rosie.org',
    role: 'internal',
    uuid: '562350a0-397c-4af1-b272-d84c02fab385',
  },
  {
    username: 'Marisa_Bogisich',
    firstName: 'Raymond',
    lastName: 'Robel',
    email: 'Beatty_Magali@gmail.com',
    role: 'internal',
    uuid: 'e2bd21c8-bd53-43dc-8738-c5fa89eff0be',
  },
  {
    username: 'Lesley.Smith',
    firstName: 'Floy',
    lastName: 'Cremin',
    email: 'Roselyn.Wolff@gmail.com',
    role: 'external',
    uuid: 'e59970d5-c58b-4093-8f57-4cba7a59055d',
  },
  {
    username: 'Smith_Anita',
    firstName: 'Arthur',
    lastName: 'Reichel',
    email: 'Bergstrom_Mitchell@Klocko.name',
    role: 'external',
    uuid: 'b9f51e18-4865-421a-a85d-8ec95e6c460b',
  },
  {
    username: 'Purdy_Vergie',
    firstName: 'Flo',
    lastName: 'Runte',
    email: 'Mariam.Rogahn@Cayla.co.uk',
    role: 'internal',
    uuid: '2aab32f5-999d-47f7-8c5a-f928211d4173',
    id: 6,
  },
  {
    username: 'Abernathy_Jesse',
    firstName: 'Izabella',
    lastName: 'Turcotte',
    email: 'Lebsack_Allan@Omari.ca',
    role: 'external',
    uuid: '48635df0-74d1-41ed-aeaf-54a92009d195',
  },
  {
    username: 'Ferry_Russel',
    firstName: 'Brianne',
    lastName: 'Keebler',
    email: 'Kulas_Gerard@yahoo.com',
    role: 'internal',
    uuid: '6480ceaa-b1bc-4d0a-a0ec-aa1fcb56b614',
  },
  {
    username: 'Padberg.Jakayla',
    firstName: 'Bailee',
    lastName: 'Welch',
    email: 'Joany_Connelly@yahoo.com',
    role: 'external',
    uuid: 'b2b6d636-182a-43bd-ab1e-04663af17ef2',
  },
  {
    username: 'Jakubowski.Jakayla',
    firstName: 'Vincenza',
    lastName: 'Monahan',
    email: 'Melvina.Lang@Everardo.biz',
    role: 'external',
    uuid: '9af52451-8607-4dff-b17a-7577b206c601',
  },
  {
    username: 'Afton_Goldner',
    firstName: 'Kurtis',
    lastName: 'Boyer',
    email: 'Trever.Steuber@Shanahan.io',
    role: 'internal',
    uuid: '004d0454-1594-4172-bb1a-4da1df5edfed',
  },
] as UserModel[];

export const Default = () => <UsersTable users={data} />;
export const Loading = () => <UsersTable users={data} loading={true} />;
