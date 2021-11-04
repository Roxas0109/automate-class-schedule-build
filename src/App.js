import React from 'react';
import './App.css';
import Login from './components/Login';
import Import from './components/Import';
import logo  from './ECSlogo.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Term from './components/Term';

function App() {
  return (
    <Router>
    <div className="App">
      
      
      <Switch>
        <Route exact path = "/">
          <img alt="ECS logo" src={logo} className="ECSlogo"/>
          <Login/>
        </Route>
        <Route path = "/term">
          <Term/>
        </Route>
        <Route path = "/import">
          <Import/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
