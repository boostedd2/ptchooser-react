import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import Loading from '../misc/loading';

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px"
  },
  container: {
    width: "100%",
    marginTop: "40px",
    display: "flex",
    flexWrap: "wrap",
    color: "white",
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
    marginRight: "10px",
    background: "grey",
  },
  loading: {
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto"
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

const SubmitStack = () => {
  const classes = useStyles();
  const [displayWeapons, setDisplayWeapons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  useEffect(() => {
    const fetchData = () => {
      axios.get(
        'http://192.168.1.17:8000/weapons'
      ).then(res => {
        setDisplayWeapons(res.data)
        setIsLoading(false)
      })
    };
    fetchData();
  }, []);
  
  return(
      <div className={classes.root}>
        <h1 style={{color: "white"}}>Create Stack</h1>
        <CssTextField className={classes.entryField} id="filled-basic" label="Stack Name" variant="filled" />
        <Button size="small" style= {{color:"white", background: "#b32eae", padding: "16px"}}>Submit Weapon Stack</Button>
        <p style={{color: "white"}}>Show Disabled Weapons</p>
        <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div className={classes.container}>
          {isLoading ? <div className={classes.loading}><Loading /></div> : displayWeapons.map(item =>
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
                <CardActions>
                  <Button size="small" style= {{color:"red", marginLeft: "auto", marginRight: "auto", marginTop: "-20px"}}>Disable Weapon</Button>
                </CardActions>
              </Card>
            </Slide>
          )}
        </div>
      </div>
  )
}

export default SubmitStack;