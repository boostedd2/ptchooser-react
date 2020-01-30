import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClosedBeta from '../misc/closedBeta';
import axios from 'axios';

//input sanitize
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

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

const closedbeta = false;

const Register = () => {
  const classes = useStyles();
  let history = useHistory()
  const [createUserName, setCreateUserName] = useState('')
  const [createUserPassword, setCreateUserPassword] = useState('')
  const [confirmUserPassword, setConfirmUserPassword] = useState('')

  const inputCreateUser = function(event) {
    setCreateUserName(event.target.value);
  }

  const inputCreateUserPassword = function(event) {
    setCreateUserPassword(event.target.value);
  }

  const inputConfirmUserPassword = function(event) {
    setConfirmUserPassword(event.target.value);
  }

  const registerSubmit = (e) => {
    e.preventDefault()
    if (confirmUserPassword === createUserPassword) {
      const postData = {
        "username": DOMPurify.sanitize(createUserName),
        "password": DOMPurify.sanitize(createUserPassword)
      }
      axios.post(
        url + "/users/register", postData
      )
      .then(res => {
        alert("Account created, please await moderator approval before using.")
        return history.push('/')
      })
      .catch(err => {
        const errMessage = err.response.data
        document.getElementById("error").innerHTML = errMessage
        document.getElementById("error").style.display = "block"
        setTimeout(function(){ document.getElementById("error").style.display = "none" }, 3000);
      })
    } else {
        const errMessage = "Passwords do not match!"
        document.getElementById("error").innerHTML = errMessage
        document.getElementById("error").style.display = "block"
        setTimeout(function(){ document.getElementById("error").style.display = "none" }, 3000);
    }
  }

  return(
    <div className={classes.root}>
      <h1>Register</h1>
      {closedbeta ? <div className={classes.loading}><ClosedBeta /></div> :
      <div>
        <h3>All sign ups must be approved, a moderator will review your account for approval and notify you usually within 48 hours.</h3>
        <h3>NOTE: An account is not needed to view weapon stacks.</h3>
        <h3 id="error" style={{color: "red", display: "none"}}>.</h3>
        <form className={classes.registerForm}>
          <CssTextField className={classes.entryField} id="filled-basic" label="Username" variant="filled" onChange={inputCreateUser} />
          <CssTextField className={classes.entryField} id="filled-basic" label="Create Password" variant="filled" type="password" onChange={inputCreateUserPassword} />
          <CssTextField className={classes.entryField} id="filled-basic" label="Confirm Password" variant="filled" type="password" onChange={inputConfirmUserPassword} />
          <Button className={classes.submitButton} size="small" onClick={registerSubmit}>Submit</Button>
        </form>
      </div>}
    </div>
  )
}

export default Register;