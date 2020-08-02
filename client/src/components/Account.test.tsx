import React from 'react';
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Accounts from './Accounts';
import { BasicAccount } from 'solstice-shared-types'

const accounts: BasicAccount[] = [
  {
    id: 1,
    customer_id: 5,
    address: '107 Upham Point',
    city: 'Baltimore',
    state: 'MD',
    zip_code: '21239',
    solar_farm_id: 5,
    capacity_share: 0.8278,
    created_date: '2018-11-20 05:38:15'
  }
]

const server = setupServer(
  rest.get('/api/account', (req, res, ctx) => {
    return res(ctx.json(accounts))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders accounts', async() => {
  render(<Accounts/>)
  await waitFor(() => screen.getByTestId('account'))
  expect(screen.getByTestId('accountTable')).toHaveTextContent('Baltimore')
});

  test('renders accounts', async() => {
    server.use(
      rest.get('/api/account', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(<Accounts/>)
    await waitFor(() => screen.getByTestId('errorMessage'))
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('sorry')    
  });

