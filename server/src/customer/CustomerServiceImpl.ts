import { injectable, inject } from "inversify";
import CustomerService from './CustomerService';
import { BasicCustomer, FullCustomer } from 'solstice-shared-types';
import { customers, accounts } from '../data';
import errorCodes from '../errorCodes';

@injectable()
class CustomerServiceImpl implements CustomerService {

  getCustomers(): BasicCustomer[] {
    return customers;
  }
  getCustomer(id: number): FullCustomer {
    const customer = customers[id - 1];
    if (!customer) throw new Error(errorCodes.CUSTOMER_NOT_FOUND);
    const accountsWithCustomer = accounts.filter(account => account.customer_id === customer.id);
    return {
      ...customer,
      accounts: accountsWithCustomer,
    }
  }
}

export default CustomerServiceImpl