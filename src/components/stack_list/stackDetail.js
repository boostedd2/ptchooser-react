import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slide from '@material-ui/core/Slide';

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
});

const egg = {
  "name": "eLEMONation",
  "author": "lmoney",
  "weapons": [
    {
      "weap_id": 1,
      "name": "Single Shot",
      "img_url": "http://192.168.1.17:8000/images/1.gif"
    },
    {
      "weap_id": 2,
      "name": "Big Shot",
      "img_url": "http://192.168.1.17:8000/images/2.gif"
    },
    {
      "weap_id": 3,
      "name": "3 Shot",
      "img_url": "http://192.168.1.17:8000/images/3.gif"
    },
    {
      "weap_id": 11,
      "name": "Spider",
      "img_url": "http://192.168.1.17:8000/images/11.gif"
    },
    {
      "weap_id": 12,
      "name": "Sniper Rifle",
      "img_url": "http://192.168.1.17:8000/images/12.gif"
    },
    {
      "weap_id": 13,
      "name": "Magic Wall",
      "img_url": "http://192.168.1.17:8000/images/13.gif"
    },
    {
      "weap_id": 15,
      "name": "Zapper",
      "img_url": "http://192.168.1.17:8000/images/15.gif"
    },
    {
      "weap_id": 16,
      "name": "Napalm",
      "img_url": "http://192.168.1.17:8000/images/16.gif"
    },
    {
      "weap_id": 17,
      "name": "Hail Storm",
      "img_url": "http://192.168.1.17:8000/images/17.gif"
    },
    {
      "weap_id": 18,
      "name": "Ground Hog",
      "img_url": "http://192.168.1.17:8000/images/18.gif"
    },
    {
      "weap_id": 19,
      "name": "Worm",
      "img_url": "http://192.168.1.17:8000/images/19.gif"
    },
  ]
}

const StackDetail = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h1>{egg.name}</h1>
      <h4 style={{marginTop: "-20px"}}>by {egg.author}</h4>
      <div className={classes.container}>
      {egg.weapons.map(item =>
            <Slide direction="up" in={true} timeout={800}>
              <Card className={classes.card}>
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