import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: "#212121"
  },
  navItem: {
    color: "white",
  }
});


const Navdrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <h2 style={{textAlign: "center", color: "#b32eae"}}>PTChooser</h2>
          <ListItem component={Link} to="/" button className={classes.navItem}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Stacks" />
          </ListItem>
          <ListItem component={Link} to="/add" button className={classes.navItem}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Submit Stack" />
          </ListItem>
          <ListItem component={Link} to="/about" button className={classes.navItem}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="What is this?" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="/login" button className={classes.navItem}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem component={Link} to="/register" button className={classes.navItem}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button style={{color: "lightgreen"}}onClick={toggleDrawer('left', true)}>[MENU]</Button>
      <Drawer 
      open={state.left}
      onClose={toggleDrawer('left', false)}
      classes={{ paper: classes.paper }}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default Navdrawer;