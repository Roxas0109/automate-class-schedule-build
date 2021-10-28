import React from 'react';
import './App.css';
import Login from './components/Login';
import Upload from './components/Upload';
import logo  from './ECSlogo.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
      
      <Switch>
        <Route exact path = "/">
          <img alt="ECS logo" src={logo} className="ECSlogo"/>
          <Login/>
        </Route>
        <Route path = "/upload">
          <Upload/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
