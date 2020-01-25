import React, { useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

//input sanitize
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

/* Login page for the application, requires username and password. 
   Data is sent over https and hashed by the server before storing to the database.
   Successful login will redirect to '/'
*/

//dev toggle
const dev = true
let url

if (dev === false) {
  url = "https://www.hdjfygr.xyz"
} else {
  url = "http://192.168.1.17:8000"
}

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

const Login = ({setUserLoggedIn, setUserId}) => {
  const classes = useStyles();
  let history = useHistory()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const inputChangeUser = function(event) {
    setUserName(event.target.value);
  }
  
  const inputChangePassword = function(event) {
    setUserPassword(event.target.value);
  }

  // send POST request to back-end, attempting authentication
  // success returns JWT which includes 'username' in the payload
  const submitLogin = (e) => {
    e.preventDefault()
    const postData = {
      "username": DOMPurify.sanitize(userName),
      "password": DOMPurify.sanitize(userPassword)
    }
    axios.post(
      url + '/users/login', postData
    )
    .then(res => {
      sessionStorage.setItem('jwtToken', res.data);
      var decoded = jwt_decode(res.data)
      sessionStorage.setItem('user', decoded.username)
      setUserLoggedIn(true)
      return history.push('/')
    })
    .catch(err => {
      const errMessage = err.response.data
      document.getElementById("error").innerHTML = errMessage
      document.getElementById("error").style.display = "block"
      setTimeout(function(){ document.getElementById("error").style.display = "none" }, 3000);
    })
  }

  return(
    <div className={classes.root}>
      <h1>Login</h1>
      <h3>You must be logged in to create Stacks.</h3>
      <h3>NOTE: An account is not needed to view weapon stacks.</h3>
      <h3 id="error" style={{color: "red", display: "none"}}>.</h3>
      <form className={classes.registerForm}>
      <CssTextField
        className={classes.entryField}
        id="filled-basic"
        label="Username"
        variant="filled"
        onChange={inputChangeUser} />
      <CssTextField className={classes.entryField}
        id="filled-basic"
        type="password"
        label="Password"
        variant="filled"
        onChange={inputChangePassword} />
      <Button type="submit" className={classes.submitButton} size="small" onClick={submitLogin}>Login</Button>
      </form>
    </div>
  )
}

export default Login;