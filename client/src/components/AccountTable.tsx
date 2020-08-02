import React from 'react'
import { BasicAccount } from 'solstice-shared-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type AppProps = { accounts: BasicAccount[] }; 

export default function AccountTable({accounts}: AppProps) {
  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table" data-testid="accountTable">
      <TableHead>
        <TableRow>
          <TableCell>Address</TableCell>
          <TableCell align="right">City</TableCell>
          <TableCell align="right">State</TableCell>
          <TableCell align="right">Zip Code</TableCell>
          <TableCell align="right">Capacity Share</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell component="th" scope="row">
                {account.address}
              </TableCell>
              <TableCell align="right">{account.city}</TableCell>
              <TableCell align="right">{account.state}</TableCell>
              <TableCell align="right">{account.zip_code}</TableCell>
              <TableCell align="right">{account.capacity_share}</TableCell>

            </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

