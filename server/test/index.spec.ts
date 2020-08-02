
import "mocha";
import request from "supertest";
import assert from "assert";
import server from '../src/app';
import { BasicCustomer, BasicAccount, FullCustomer } from 'solstice-shared-types';



describe('server', async() => {

  const serverInstance = await server.build();
  describe('customers', () => {

    describe('getCustomer', () => {

      it('gets a single customer', async() => {
        const response =  await request(serverInstance)
        .get("/api/customer/1")
        .expect(200);
      assert.equal(response.body.id, 1);
      const customer = response.body as FullCustomer;
      assert(customer.accounts instanceof Array);
      })
      it('returns an error if no customer is found', async() => {
          const response =  await request(serverInstance)
          .get("/api/customer/100000")
          .expect(404);
        const responseBody = response.body
        assert(responseBody.error === "CUSTOMER_NOT_FOUND");
      })
    })
    describe('getCustomers', () => {
      it('gets a list of customers', async() => {
        const response =  await request(serverInstance)
        .get("/api/customer/")
        .expect(200);
        assert.equal(response.body[0].id, 1);
        const customers = response.body as BasicCustomer[];
        assert(typeof(customers[0].first_name) === "string");
      })
    })
  })

  describe('accounts', () => {
    it('gets a list of accounts', async() => {
      const response =  await request(serverInstance)
      .get("/api/account/")
      .expect(200);
      assert.equal(response.body[0].id, 1);
      const customers = response.body as BasicAccount[];
      assert(typeof(customers[0].address) === "string");
    })
  })
})
