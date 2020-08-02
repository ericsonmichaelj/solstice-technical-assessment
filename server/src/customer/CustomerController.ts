import { injectable, inject } from "inversify";
import customerService from './CustomerService';
import {
    controller, httpGet, BaseHttpController, HttpResponseMessage, StringContent, requestParam, response
} from "inversify-express-utils";
import TYPES from '../types';
import CustomerService from './CustomerService';
import errorCodes from '../errorCodes';
import { Response } from 'express';


@controller("/api/customer")
export default class CustomerController extends BaseHttpController {

  constructor(@inject(TYPES.CustomerService) private readonly _customerService: CustomerService) {
    super();
  }

  @httpGet("/")
  public getCustomers() {
    return this._customerService.getCustomers();
  };

  @httpGet("/:id")
  public async getCustomer(@requestParam("id") id: string, @response() res: Response) {
    try {
      const customer = this._customerService.getCustomer(parseInt(id, 10));
      return customer;
    } catch (err) {
      if (err.message === errorCodes.CUSTOMER_NOT_FOUND) {
        return res.status(404).json({error: err.message});
      }
      return res.status(500).json({ error: 'Unknown error' });
    }
  };
}