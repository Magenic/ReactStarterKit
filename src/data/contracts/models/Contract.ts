import {ContractRating} from './ContractRating';

export interface Contract {
  readonly contractNumber: string;
  readonly organizationType: string;
  readonly contractName: string;
  readonly organizationMarketingName: string;
  readonly parentOrganization: string;
  readonly ratings: ContractRating[];
}
