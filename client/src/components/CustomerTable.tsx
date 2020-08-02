import React from 'react'
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BasicCustomer } from 'solstice-shared-types';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type AppProps = { customers: BasicCustomer[] };

const useStyles = makeStyles(() =>
  createStyles({
    tableRow: {
      textDecoration: 'none'
    }
  })
)

export default function CustomerTable({customers}: AppProps) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table" component="div" data-testid="customerTable">
      <TableHead component="div">
        <TableRow component="div">
          <TableCell component="div">First Name</TableCell>
          <TableCell align="right" component="div">Last Name</TableCell>
          <TableCell align="right" component="div">Email </TableCell>
          <TableCell align="right" component="div">Is Active?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody component="div">
        {customers.map((customer) => (
            <TableRow key={customer.id} component={Link} to={`/customer/${customer.id}`} className={classes.tableRow}>
              <TableCell component="div" scope="row">
                {customer.first_name}
              </TableCell>
              <TableCell component="div" align="right">{customer.last_name}</TableCell>
              <TableCell component="div" align="right">{customer.email}</TableCell>
              <TableCell component="div" align="right">{customer.active ? "true": "false"}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
