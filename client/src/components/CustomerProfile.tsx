import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import { FullCustomer } from 'solstice-shared-types';
import { useParams } from 'react-router-dom';
import CustomerProfileContent from './CustomerProfileContent';

const CUSTOMER_NOT_FOUND='CUSTOMER_NOT_FOUND'

export default function CustomerProfile() {
  const [customerProfile, setCustomerProfile] = useState<FullCustomer | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasErrors, setHasErrors] = useState(false);
  let { customerId } = useParams();
  useEffect(() => {
    axios(
      `/api/customer/${customerId}`,
    ).then((results) => {
      setCustomerProfile(results.data);
    }).catch(error => {
      if(error.response && error.response.data && error.response.data.error === CUSTOMER_NOT_FOUND) {
        setErrorMessage('Customer not found');
      }
      setHasErrors(true);
    })
  },[customerId]);
 
  return (
    <div>
      { (!hasErrors && !customerProfile)  ? <Loader/> : null}
      { hasErrors ? <ErrorMessage message={errorMessage}/> : null }
      { customerProfile ? <div><h2>Customer Profile</h2><CustomerProfileContent customerProfile={customerProfile} /></div> : null }
    </div>
  )
}
