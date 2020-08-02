import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Accounts, Customers, CustomerProfile } from './components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
  createStyles({
    navBarItem: {
      color: 'white',
      textDecoration: 'none',
      marginRight: '1em'
    }
  })
)


function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          <Link to="/account" className={classes.navBarItem}>
            Accounts
          </Link>
        </Typography>
        <Typography variant="h6">
        <Link to="/" className={classes.navBarItem}>
          Customers
        </Link> 
      </Typography>
      </Toolbar>
    </AppBar>
  )
}


function Router() {
  return (
  <BrowserRouter>
    {NavBar()}
    <Container>
      <Box my={4}>
        <Switch>
          <Route exact path="/account">
            <Accounts />
          </Route>
          <Route path="/customer/:customerId">
            <CustomerProfile />
          </Route>
          <Route exact path="/">
            <Customers />
          </Route>
          <Route path="*">
            <div>Sorry Page not found</div>
          </Route>
        </Switch>
      </Box>
    </Container>
  </BrowserRouter>
  );
}

export default Router;
