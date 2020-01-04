import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dummy from '../../dummy'

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    minWidth: 275,
    width: "300px",
    backgroundColor: "#212121",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
  },
  title: {
    color: "white",
  },
  desc: {
    color: "white",
  },
});


const StackList = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {dummy.map(item => 
        <Card className={classes.card}>
          <CardContent>
            <h2 className={classes.title}>{item.name}</h2>
            <p className={classes.desc}>This is a user submitted stack.</p>
            <p className={classes.desc}>By {item.author}</p>
          </CardContent>
          <CardActions>
            <Button size="small" style= {{color: "white"}}>View Weapon Stack</Button>
          </CardActions>
        </Card>
      )}
    </div>
  )
}

export default StackList;