import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import StackList from './components/stack_list/stackList'
import SubmitStack from './components/submit_stack/submitStack'
import About from './components/about/about'
import Login from './components/login/login'
import Register from './components/register/register'

function App() {
  const [stackList, setStackList] = useState(0)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={StackList} />
          <Route path="/add" component={SubmitStack} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
