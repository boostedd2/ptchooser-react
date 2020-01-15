import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
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
  titles: {
    color: "white"
  },
  submitButton: {
    color: "white",
    background: "#b32eae",
    padding: "16px"
  },
  card: {
    flex: "20%",
    minWidth: "200px",
    backgroundColor: "#2e2e2e",
    border: "none",
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
  cardTitle: {
    color: "white",
    textAlign: "center"
  },
  button: {
    color:"red",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-20px"
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
  let history = useHistory()
  const classes = useStyles();
  const [displayWeapons, setDisplayWeapons] = useState([])
  const [disabledWeapons, setDisabledWeapons] = useState([])
  const [stackName, setStackName] = useState('')
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

  const sendStack = () => {
    const postData = {
      "name": stackName,
      "weapons": filtered()
    }
    axios.post(
      'http://192.168.1.17:8000/stacks', postData
    ).then(res => {
      console.log(res.data)
      return history.push('/')
    })
  };
  

  const onDisable = (id) => {
    const isNotId = item => item.weap_id !== id;
    const isId = item => item.weap_id === id
    const updatedList = displayWeapons.filter(isNotId);
    const disabledItem = displayWeapons.filter(isId)[0];
    setDisabledWeapons([...disabledWeapons, disabledItem]);
    setDisplayWeapons(updatedList)
  }

  const filtered = () => {
    if (state.checkedA === true) {
      return disabledWeapons.sort(function(a, b){return a.weap_id - b.weap_id});
    } else {
      return displayWeapons
    }
  }

 const inputChange = function(event) {
    setStackName(event.target.value);
  }
  
  return(
      <div className={classes.root}>
        <h1 className={classes.titles}>Create Stack</h1>
        <h3 className={classes.titles}>You can submit the the negative list too.</h3>
        <CssTextField className={classes.entryField} id="filled-basic" label="Stack Name" variant="filled" defaultValue={stackName} onBlur={inputChange} />
        <Button className={classes.submitButton} size="small" onClick={() => sendStack()}>Submit Weapon Stack</Button>
        <p className={classes.titles}>Toggle Negative List</p>
        <Switch
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <span style={{color: "white",}}>{filtered().length} Weapons selected</span>
        <div className={classes.container}>
          {isLoading ? 
          <div className={classes.loading}><Loading /></div> : filtered().map(item =>
            <Slide direction="up" in={true} timeout={800} key={item.weap_id}>
              <Card className={classes.card} raised={true}>
                <CardMedia
                  className={classes.media}
                  image={item.img_url}
                  title={item.name}
                />
                <CardContent>
                  <h2 className={classes.cardTitle}>{item.name}</h2>
                </CardContent>
                <CardActions>
                  {filtered() !== disabledWeapons ? 
                    <Button size="small" className={classes.button} onClick={() => onDisable(item.weap_id)}>Disable</Button> :
                    <Button size="small" className={classes.button} onClick={() => onDisable(item.weap_id)}>Enable</Button>}
                </CardActions>
              </Card>
            </Slide>
          )}
        </div>
      </div>
  )
}

export default SubmitStack;