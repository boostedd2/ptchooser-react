import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
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
  },
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

const Register = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h1>Register</h1>
      <h3>All sign ups must be approved, you will receive an email when your account is created.</h3>
      <h3>NOTE: An account is not needed to view weapon stacks.</h3>
      <form className={classes.registerForm}>
      <CssTextField className={classes.entryField} id="filled-basic" label="Email" variant="filled" />
      <CssTextField className={classes.entryField} id="filled-basic" label="Username" variant="filled" />
      <CssTextField className={classes.entryField} id="filled-basic" label="Create Password" variant="filled" />
      <CssTextField className={classes.entryField} id="filled-basic" label="Confirm Password" variant="filled" />
      </form>
    </div>
  )
}

export default Register;