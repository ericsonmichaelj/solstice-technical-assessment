import "reflect-metadata";
import "./customer/CustomerController"
import "./account/AccountController";
import "./types";
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer } from 'inversify-express-utils';
import  { AccountService, AccountServiceImpl } from "./account";
import { CustomerService, CustomerServiceImpl } from './customer'
import TYPE from './types'
const container = new Container();

container.bind<AccountService>(TYPE.AccountService).to(AccountServiceImpl);
container.bind<CustomerService>(TYPE.CustomerService).to(CustomerServiceImpl);

const server = new InversifyExpressServer(container);

export default server
