import { BasicCustomer, FullCustomer } from 'solstice-shared-types';

export default interface CustomerService {
  getCustomers(): BasicCustomer[],
  getCustomer(id: number): FullCustomer,
}