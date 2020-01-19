import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slide from '@material-ui/core/Slide';
import Loading from '../misc/loading';

const dev = true
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
    backgroundColor: "#2e2e2e",
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
  loading: {
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto"
  },
});

const StackDetail = (props) => {
  const classes = useStyles();
  const [displayPosts, setDisplayPosts] = useState([])
  const [description, setDescription] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      axios.get(
        url + '/stacks/' + props.match.params.detail
      ).then(res => {
        setDisplayPosts(res.data.weapons)
        setDescription(res.data)
        setIsLoading(false)
      })
    };
    fetchData();
  }, [props.match.params.detail]);

  return(
    <div className={classes.root}>
      <h1>{description.name} {displayPosts.length !== 0 ? `(${displayPosts.length.toString()} Weapons)` : ""}</h1>
      <p>by {description.author}</p>
      <div className={classes.container}>
      {isLoading ?
      <div className={classes.loading}><Loading /></div> :  displayPosts.map(item =>
            <Slide direction="up" in={true} timeout={800}>
              <Card className={classes.card} raised={true}>
                <CardMedia
                  className={classes.media}
                  image={item.img_url}
                  title={item.name}
                />
                <CardContent>
                  <h2 className={classes.title}>{item.name}</h2>
                </CardContent>
              </Card>
            </Slide>
          )}
      </div>
    </div>
  )
}

export default StackDetail;