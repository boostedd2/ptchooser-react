import React, { useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

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

const Login = () => {
  let history = useHistory()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const inputChangeUser= function(event) {
    setUserName(event.target.value);
  }
  
  const inputChangePassword= function(event) {
    setUserPassword(event.target.value);
  }

  const submitLogin = () => {
    const postData = {
      "username": userName,
      "password": userPassword
    }
    axios.post(
      'http://192.168.1.17:8000/users/login', postData
    ).then(res => {
      sessionStorage.setItem('jwtToken', res.data);
      console.log(sessionStorage.getItem('jwtToken'))
      return history.push('/')
    })
  }

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <h1>Login</h1>
      <h3>You must be logged in to create Stacks.</h3>
      <h3>NOTE: An account is not needed to view weapon stacks.</h3>
      <form className={classes.registerForm}>
      <CssTextField
        className={classes.entryField}
        id="filled-basic"
        label="Username"
        variant="filled"
        onChange={inputChangeUser} />
      <CssTextField className={classes.entryField}
        id="filled-basic"
        label="Password"
        variant="filled"
        onChange={inputChangePassword} />
      <Button className={classes.submitButton} size="small" onClick={submitLogin}>Login</Button>
      </form>
    </div>
  )
}

export default Login;