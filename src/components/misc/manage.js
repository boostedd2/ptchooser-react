import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//this page only works when logged in as the admin user and requires callback to the backend-server
//before allowing any changes to be done, only allows disable/enable of accounts
const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
    color: "white",
  },
  container: {
    color: "white",
  },
  registerForm: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  entryField: {
    marginBottom: "10px",
    background: "grey",
    [theme.breakpoints.up('md')]: {
      width: "40%",
    },
  },
  submitButton: {
    color:"white",
    background: "#b32eae",
    padding: "16px",
    width: "80px"
  }
}));

const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiFilledInput-underline::after': {
      borderBottom: "white solid 1px",
    },
    '& .MuiFilledInput-input': {
      color: "white",
    }
  },
})(TextField);

const Manage = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>This page only works for moderators.</h2>
        <form className={classes.registerForm}>
          <CssTextField
            className={classes.entryField}
            id="filled-basic"
            label="Username"
            variant="filled"
             />
          <CssTextField className={classes.entryField}
            id="filled-basic"
            type="password"
            label="Password"
            variant="filled"
             />
          <Button type="submit" className={classes.submitButton} size="small">Update</Button>
      </form>
      </div>
    </div>
  )
}

export default Manage;