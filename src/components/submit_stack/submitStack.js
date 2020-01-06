import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
}));


const SubmitStack = () => {
  const classes = useStyles();
  
  return(
      <div className={classes.root}>
          <h2>Create a new stack below</h2>
      </div>
  )
}

export default SubmitStack;