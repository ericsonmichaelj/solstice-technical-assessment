import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FullCustomer } from 'solstice-shared-types';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import AccountTable from './AccountTable';

type AppProps = { customerProfile: FullCustomer }; 

export default function CustomerProfileContent({customerProfile}: AppProps) {
  return (
    <div>
      <Card data-testid="customerProfile">
        <CardContent>
          <Typography variant="h4">
          { customerProfile.first_name } { customerProfile.last_name } 
          </Typography>
          <Typography variant="body1">
          <b>Account Manager Id:</b> { customerProfile.account_manager_id }
          </Typography>
          <Typography variant="body1">
          <b>Email:</b> {customerProfile.email }
          </Typography>
          <Typography variant="body1">
          <b>Active:</b> {customerProfile.active ?  <FontAwesomeIcon icon={faCheck} />: <FontAwesomeIcon icon={faTimes} /> }
          </Typography>
          { customerProfile.reason_for_joining ?
            <div>
              <Typography variant="body1">
              <b>Reason for joining:</b>
              </Typography>
              <Typography variant="body2">
              { customerProfile.reason_for_joining }
              </Typography> 
            </div>
            : null }
        </CardContent>
      </Card>
      <h3>
        Accounts:
      </h3>
      { customerProfile.accounts.length > 0 ? 
        <AccountTable accounts={customerProfile.accounts}/> : 
        <Typography variant="body1" color="secondary">No Accounts to display</Typography> 
      }
      </div>
    )
}
