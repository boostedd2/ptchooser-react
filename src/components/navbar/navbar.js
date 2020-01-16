import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
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
    marginRight: "10px"
  }
}));

const Navbar = ({userLoggedIn}) => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: "#212121",}}>
        <div className={classes.navbarItems}>
          <Navdrawer />
          <Link to="/" className={classes.home}><h2>PocketStacks</h2></Link>
          {userLoggedIn ? <div className={classes.status}>Logout</div> : <div></div>}
        </div>
      </AppBar>
    </div>
  )
}

export default Navbar;