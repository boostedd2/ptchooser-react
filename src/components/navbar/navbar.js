import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Navdrawer from '../drawer/drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#212121"}}>
        <Toolbar>
          <Navdrawer />
          <h2 style={{color: "#b32eae"}}>PTChooser</h2>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;