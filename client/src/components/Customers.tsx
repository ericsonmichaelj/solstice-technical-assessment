import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loader from './Loader'
import CustomerTable from './CustomerTable'
import ErrorMessage from './ErrorMessage'
import { BasicCustomer } from 'solstice-shared-types';

export default function Customers() {
  const [customers, setCustomers] = useState<BasicCustomer[]>([]);
  const [hasErrors, setHasErrors] = useState(false);
  useEffect(() => {
    axios(
      '/api/customer',
    ).then((results) => {
      setCustomers(results.data);
    }).catch(error => {
      setHasErrors(true);
    })
  },[]);
 
  return (
    <div>
      { (!hasErrors && !customers.length)  ? <Loader/> : null}
      { hasErrors ? <ErrorMessage/> : null }
      { customers.length  ? <div><h2>Customers</h2><CustomerTable customers={customers}/></div> : null }
    </div>
  )
}
