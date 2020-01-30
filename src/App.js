import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import StackList from './components/stack_list/stackList'
import SubmitStack from './components/submit_stack/submitStack'
import About from './components/about/about'
import Login from './components/login/login'
import Register from './components/register/register'
import StackDetail from './components/stack_list/stackDetail';
import Manage from './components/misc/manage';

function App() {

  let logged
  let user

  if (sessionStorage.getItem('jwtToken')) {
    logged = true
  } else {
    logged = false
  }

  if (sessionStorage.getItem('user')) {
    user = sessionStorage.getItem('user')
  } else {
    user = null
  }

  const [userLoggedIn, setUserLoggedIn] = useState(logged)
  const [userId, setUserId] = useState(user)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} userId={userId} setUserId={setUserId} />
        <Switch>
          <Route exact path="/" component={StackList} />
          <Route path="/stacks/:detail" component={StackDetail} />
          <Route 
            path='/add' 
            render={(props) => (
              <SubmitStack {...props} userId={userId} />
            )} 
          />
          <Route path="/about" component={About} />
          <Route 
            path='/login' 
            render={(props) => (
              <Login {...props} setUserLoggedIn={setUserLoggedIn} setUserId={setUserId} />
            )}
          />
          <Route path="/register" component={Register} />
          <Route 
            path='/manage' 
            render={(props) => (
              <Manage {...props} setUserLoggedIn={setUserLoggedIn} setUserId={setUserId} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
