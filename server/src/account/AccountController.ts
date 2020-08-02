import { inject } from "inversify";
import AccountService from './AccountService';
import {
    controller, httpGet, BaseHttpController
} from "inversify-express-utils";
import TYPES from '../types';


@controller("/api/account")
export default class AccountController extends BaseHttpController {

  constructor(@inject(TYPES.AccountService) private readonly _accountService: AccountService) {
    super();
  }

  @httpGet("/")
  public getAccounts() {
    return this._accountService.getAccounts();
  };

}