import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClosedBeta from '../misc/closedBeta';

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
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

const closedbeta = true;

const Register = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h1>Register</h1>
      {closedbeta ? <div className={classes.loading}><ClosedBeta /></div> :
      <div>
        <h3>All sign ups must be approved, you will receive an email when your account is created.</h3>
        <h3>NOTE: An account is not needed to view weapon stacks.</h3>
        <form className={classes.registerForm}>
        <CssTextField className={classes.entryField} id="filled-basic" label="Email" variant="filled" />
        <CssTextField className={classes.entryField} id="filled-basic" label="Username" variant="filled" />
        <CssTextField className={classes.entryField} id="filled-basic" label="Create Password" variant="filled" />
        <CssTextField className={classes.entryField} id="filled-basic" label="Confirm Password" variant="filled" />
        <Button size="small" style= {{color:"white", background: "#b32eae", padding: "16px", width: "80px"}}>Submit</Button>
        </form>
      </div>}
    </div>
  )
}

export default Register;