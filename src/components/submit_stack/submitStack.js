import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import weps from '../../allWeapons';

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  container: {
    color: "white",
  },
  container: {
    width: "100%",
    marginTop: "40px",
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    flex: "20%",
    minWidth: "200px",
    backgroundColor: "#212121",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
  },
  media: {
    height: 80,
    width: 80,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    marginBottom: "-20px"
  },
  title: {
    color: "white",
    textAlign: "center"
  },
  desc: {
    color: "white",
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

const SubmitStack = () => {
  const classes = useStyles();
  
  return(
      <div className={classes.root}>
        <h1 style={{color: "white"}}>Create Stack</h1>
        <CssTextField className={classes.entryField} id="filled-basic" label="Stack Name" variant="filled" />
        <Button size="small" style= {{color:"white", background: "#b32eae", marginLeft: "20px", padding: "16px"}}>Submit Weapon Stack</Button>
        <div className={classes.container}>
          {weps.map(item => 
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={item.img_url}
                title={item.name}
              />
              <CardContent>
                <h2 className={classes.title}>{item.name}</h2>
              </CardContent>
              <CardActions>
                <Button size="small" style= {{color:"red", marginLeft: "auto", marginRight: "auto", marginTop: "-20px"}}>Disable Weapon</Button>
              </CardActions>
            </Card>
          )}
        </div>
      </div>
  )
}

export default SubmitStack;