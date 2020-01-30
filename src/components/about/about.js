import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bitwiselogo from '../misc/assets/miniblitwise.gif';
import ptlogo from '../misc/assets/miniptlogo.gif';

const useStyles = makeStyles({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
    color: "white",
  },
  logo_container: {
    display: "flex",
    width: "100%",
    margin: "auto",
    alignContent: "center",
    alignItems: "center",
  },
});

const About = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <h1>What is PocketStacks?</h1>
      <p>PocketStacks is an application created for players of the multi-platform game Pocket Tanks.</p>
      <p>I created this application so players have a way to share user specified weapon loadouts, making it easier to define different types of gameplay, in a unified location, making it easier to share with other players.</p>
      <p></p>
      <h1>How Does it work?</h1>
      <p>Everyone is able to see the stacks that other users have created. This provides a list of weapons to enable or disable in-game depending on what the creator specified.</p>
      <p>You can submit the list of weapons in the normal list or the negative list, this makes it easier to make a stack based on your preferences.</p>
      <p>You must be logged in to create a stack and share it with others.</p>
      <p>Hoping this makes some fun matches for our players.</p>
      <h1>Why?</h1>
      <p></p>
      <p>I have been playing in tournaments with a group of fans called the PTUT group. Pocket Tanks Ultimate Tournaments has been fun, and provides a way to interact with players since there is no in-game communication.</p>
      <p>PocketStacks was created to make arranging allowed move sets easier and more uniform for everyone, all moves are in order as they appear in-game, and provide an image to make it easier to identify and manage.</p>
      <br />
      <h4>Disclaimer:</h4>
      <p>All icons, weapon names, and Pocket Tanks assets are not owned or created by me, they are property of BlitWise Productions LLC.</p>
      <p>This application was created as a fan project for other players to use if they wish.</p>
      <div>
        <div className={classes.logo_container}>
          <a style={{marginRight: "20px"}} href="http://www.blitwise.com/ptanks.html"><img src={ptlogo} width="auto" height="80px" /></a>
          <a href="http://www.blitwise.com/" ><img src={bitwiselogo} width="auto" height="40px" /></a>
        </div>
      </div>
      <br />
    </div>
  )
}

export default About;