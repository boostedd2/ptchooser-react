import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Navdrawer from '../drawer/drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbarItems: {
    display: "flex",
    alignItems: "center",
  },
  home: {
    backgroundColor: "#212121",
    color:"#b32eae",
    textDecoration: "none",
    '&:focus': {
      outline: 0
    }
  },
  status: {
    marginLeft: "auto",
    marginRight: "10px",
    backgroundColor: "#212121",
    color: "#b32eae",
    padding: 0
  }
}));

const Navbar = ({userLoggedIn, setUserLoggedIn}) => {
  const classes = useStyles();
  let history = useHistory()

  const logout = () => {
    sessionStorage.removeItem('jwtToken')
    setUserLoggedIn(false)
  }

  const login = () => {
    history.push('/login')
  }

  return(
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: "#212121",}}>
        <div className={classes.navbarItems}>
          <Navdrawer />
          <Link to="/" className={classes.home}><h2>PocketStacks</h2></Link>
          {userLoggedIn ? 
            <Button className={classes.status} onClick={() => logout()}>Logout</Button> : 
            <Button className={classes.status} onClick={() => login()}>Login</Button>}
        </div>
      </AppBar>
    </div>
  )
}

export default Navbar;