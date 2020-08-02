import React from 'react';
import { render } from '@testing-library/react';
import App from './Router';

test('renders accounts and customers', () => {
  const { getByText } = render(<App />);
  const accounts = getByText(/Accounts/i);
  const customers = getByText(/Customers/i);
  expect(accounts).toBeInTheDocument();
  expect(customers).toBeInTheDocument();
});
