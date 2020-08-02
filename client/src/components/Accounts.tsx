import React, { useState, useEffect } from 'react'
import { BasicAccount } from 'solstice-shared-types';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import AccountTable from './AccountTable';

export default function Accounts() {
  const [accounts, setAccounts] = useState<BasicAccount[]>([]);
  const [hasErrors, setHasErrors] = useState(false);
 
  useEffect(() => {
    axios(
      '/api/account',
    ).then((results) => {
      setAccounts(results.data);
    }).catch(error => {
      setHasErrors(true);
    })
  },[]);
 
  return (
    <div>
      { (!hasErrors && !accounts.length)  ? <Loader /> : null}
      { hasErrors ? <ErrorMessage/> : null }
      { accounts.length  ? <div><h2 data-testid="account">Accounts</h2>
      <AccountTable accounts={accounts}/></div>
      : null }
    </div>
  )
}
