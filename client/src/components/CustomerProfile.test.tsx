import React from 'react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, waitFor, screen } from '@testing-library/react'
import CustomerProfile from './CustomerProfile';
import { FullCustomer } from 'solstice-shared-types'
import { MemoryRouter, Route } from 'react-router-dom';

const customer: FullCustomer = {
  id: 1,
  active: 0,
  account_manager_id: 1,
  first_name: 'michael',
  last_name: 'ericson',
  email: 'ericson.michael.j@gmail.com',
  accounts: [{
    id: 1,
    customer_id: 1,
    address: '107 Upham Point',
    city: 'Baltimore',
    state: 'MD',
    zip_code: '21239',
    solar_farm_id: 5,
    capacity_share: 0.8278,
    created_date: '2018-11-20 05:38:15'
  }],
  created_date: '2018-11-20 05:38:15',
  reason_for_joining: "Loris"
}

const server = setupServer(
  rest.get('/api/customer/1', (req, res, ctx) => {
    return res(ctx.json(customer))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the customer profile', async() => {
  render(<MemoryRouter initialEntries={['/customer/1']}>
      <Route path='/customer/:customerId'>
        <CustomerProfile/>
      </Route>
    </MemoryRouter>)
  await waitFor(() => screen.getByTestId('customerProfile'))
  expect(screen.getByTestId('customerProfile')).toHaveTextContent('ericson')
});