import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CachedIcon from '@material-ui/icons/Cached';

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center"
    },
    text: {
        fontSize: "36px",
    },
    loading: {
        animation: "$rotation 1s infinite linear",
    },
    '@keyframes rotation': {
        from: {
            transform: "rotate(359deg)"
          },
          to: {
            transform: "rotate(0deg)"
          }
    }
}));

const Loading = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.text}>Loading</div>
            <div className={classes.loading}><CachedIcon fontSize="large" /></div>
        </div>
    )
}

export default Loading;