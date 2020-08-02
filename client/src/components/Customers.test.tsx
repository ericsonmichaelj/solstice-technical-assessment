import React from 'react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, waitFor, screen } from '@testing-library/react'
import Customers from './Customers';
import { BasicCustomer } from 'solstice-shared-types'
import { MemoryRouter, Route } from 'react-router-dom';

const customers: BasicCustomer[] = [{
  id: 1,
  active: 0,
  account_manager_id: 1,
  first_name: 'michael',
  last_name: 'ericson',
  email: 'ericson.michael.j@gmail.com',
  created_date: '2018-11-20 05:38:15',
  reason_for_joining: "Loris",
}]

const server = setupServer(
  rest.get('/api/customer', (req, res, ctx) => {
    return res(ctx.json(customers))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the customers', async() => {
  render(<MemoryRouter initialEntries={['/']}><Route path="/"><Customers/></Route></MemoryRouter>)
  await waitFor(() => screen.getByTestId('customerTable'))
  expect(screen.getByTestId('customerTable')).toHaveTextContent('ericson')
});