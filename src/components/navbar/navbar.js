import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
  },
  logoutInfo: {
    display: "flex",
    marginLeft: "auto"
  },
  loggedUser: {
    color: "white",
    marginRight: "10px",
  },
  userMenu: {
    marginTop: "40px",
  },
  userIcon: {
    marginRight: "2px",
    alignItems: "center"
  },
  paper: {
    backgroundColor: "#212121",
    color: "#b32eae",
  }
}));

const Navbar = ({userLoggedIn, setUserLoggedIn, userId, setUserId}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  let history = useHistory()

  const logout = () => {
    handleClose()
    sessionStorage.removeItem('jwtToken')
    setUserLoggedIn(false)
    sessionStorage.removeItem('user')
  }

  const login = () => {
    history.push('/login')
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: "#212121",}}>
        <div className={classes.navbarItems}>
          <Navdrawer />
          <Link to="/" className={classes.home}><h2>PocketStacks</h2></Link>
          {userLoggedIn ? 
            <div className={classes.logoutInfo}>
              <Button className={classes.status} onClick={handleClick}><AccountCircleIcon className={classes.userIcon} />{userId}</Button>
              <Menu
                className={classes.userMenu}
                classes={{ paper: classes.paper }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </Menu>
            </div> : 
            <Button className={classes.status} onClick={() => login()}>Login</Button>}
        </div>
      </AppBar>
    </div>
  )
}

export default Navbar;