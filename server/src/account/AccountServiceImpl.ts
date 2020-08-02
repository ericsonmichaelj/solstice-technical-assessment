import { injectable } from "inversify";
import AccountService from './AccountService';
import { BasicAccount } from 'solstice-shared-types';
import { accounts } from '../data';

@injectable()
class AccountServiceImpl implements AccountService {
  getAccounts(): BasicAccount[] {
    return accounts;
  }
}

export default AccountServiceImpl