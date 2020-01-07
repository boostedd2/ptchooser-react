import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import dummy from '../../dummy'

const production = false

if (production === true) {
  dummy = 1//api response
}

const useStyles = makeStyles({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
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
  title: {
    color: "white",
  },
  desc: {
    color: "white",
  },
});


const StackList = () => {
  const classes = useStyles();
  const [displayPosts, setDisplayPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/stacks'
      );
        setDisplayPosts(result.data)
        setIsLoading(false)
    };
    fetchData();
  }, []);

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        {displayPosts.map(item => 
          <Card className={classes.card}>
            <CardContent>
              <h2 className={classes.title}>{item.name}</h2>
              <p className={classes.desc}>This is a user submitted stack.</p>
              <p className={classes.desc}>By {item.author}</p>
            </CardContent>
            <CardActions>
              <Button size="small" style= {{color:"white"}}>View Weapon Stack</Button>
            </CardActions>
          </Card>
        )}
      </div>
    </div>
  )
}

export default StackList;