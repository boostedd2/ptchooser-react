import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Loading from '../misc/loading';

const dev = false
let url

if (dev === false) {
  url = "https://www.hdjfygr.xyz"
} else {
  url = "http://192.168.1.17:8000"
}

const useStyles = makeStyles({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
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
    backgroundColor: "#2e2e2e",
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
  loading: {
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  }
});


const StackList = () => {
  const classes = useStyles();
  const [displayPosts, setDisplayPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      axios.get(
        url + '/stacks'
      ).then(res => {
        setDisplayPosts(res.data)
        setIsLoading(false)
      })
    };
    fetchData();
  }, []);
  

  return(
    <div className={classes.root}>
      <h1 style={{color: "white"}}>Stack Viewer</h1>
      <div className={classes.container}>
        {isLoading ? <div className={classes.loading}><Loading /></div> : displayPosts.map(item =>
          <Slide direction="up" in={true} timeout={800}>
            <Card className={classes.card} raised={true}>
              <CardContent>
                <h2 className={classes.title}>{item.name}</h2>
              </CardContent>
              <CardActions>
                <Button component={Link} to={"stacks/" + slugify(item.slug)} size="small" style= {{color:"white"}}>View Weapon Stack</Button>
              </CardActions>
            </Card>
          </Slide>
        )}
      </div>
    </div>
  )
}

export default StackList;