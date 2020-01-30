import React, { useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//input sanitize
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

//this page only works when logged in as the admin user and requires callback to the backend-server
//before allowing any changes to be done, only allows disable/enable of accounts

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
  const [userMod, setUserMod] = useState('')
  const [activeMod, setActiveMod] = useState('')

  const inputUserMod = function(event) {
    setUserMod(event.target.value);
  }
  
  const inputActiveMod = function(event) {
    setActiveMod(event.target.value);
  }

  //send data to the server to activate accounts
  //
  const manageSubmit = (e) => {
    e.preventDefault()
    const putData = {
      "username": DOMPurify.sanitize(userMod),
      "active": DOMPurify.sanitize(activeMod)
    }
    if (sessionStorage.getItem('jwtToken')) {
      axios.post(
        url + "/users/moderator", putData,
        { headers: {"auth-token": sessionStorage.getItem('jwtToken') }}
      )
      .then(res => {
        const errMessage = res.data
        document.getElementById("error").innerHTML = errMessage
        document.getElementById("error").style.display = "block"
        setTimeout(function(){ document.getElementById("error").style.display = "none" }, 3000);
      })
      .catch(err =>{
        const errMessage = err.response.data
        document.getElementById("error").innerHTML = errMessage
        document.getElementById("error").style.display = "block"
        setTimeout(function(){ document.getElementById("error").style.display = "none" }, 3000);
      })
    }
  }

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>This page only works for moderators.</h2>
        <h3 id="error" style={{color: "red", display: "none"}}>.</h3>
        <form className={classes.registerForm}>
          <CssTextField
            className={classes.entryField}
            id="filled-basic"
            label="Username"
            variant="filled"
            onChange={inputUserMod}
             />
          <CssTextField className={classes.entryField}
            id="filled-basic"
            label="Active"
            variant="filled"
            onChange={inputActiveMod}
             />
          <Button type="submit" className={classes.submitButton} size="small" onClick={manageSubmit}>Update</Button>
      </form>
      </div>
    </div>
  )
}

export default Manage;