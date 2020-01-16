import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import StackList from './components/stack_list/stackList'
import SubmitStack from './components/submit_stack/submitStack'
import About from './components/about/about'
import Login from './components/login/login'
import Register from './components/register/register'
import StackDetail from './components/stack_list/stackDetail';

function App() {

  let logged

  if (sessionStorage.getItem('jwtToken')) {
    logged = true
  } else {
    logged = false
  }

  const [userLoggedIn, setUserLoggedIn] = useState(logged)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar userLoggedIn={userLoggedIn} />
        <Switch>
          <Route exact path="/" component={StackList} />
          <Route path="/stacks/:detail" component={StackDetail} />
          <Route path="/add" component={SubmitStack} />
          <Route path="/about" component={About} />
          <Route 
            path='/login' 
            render={(props) => (
              <Login {...props} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
            )} 
          />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
