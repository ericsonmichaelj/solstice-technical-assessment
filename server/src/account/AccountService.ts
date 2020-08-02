import { BasicAccount } from 'solstice-shared-types';

export default interface AccountService {
  getAccounts(): BasicAccount[],
}