import React from 'react';
import './App.css';
import Login from './components/Login';
import Import from './components/Import';
import Submitted from './components/Submitted';
import HomePage from './components/HomePage/HomePage';
import logo  from './ECSlogo.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Content from './components/Content';
import Term from './components/Term';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>

        <Route path="/" element={
          <div>
            <img alt="ECS logo" src={logo} className="ECSlogo"/>
            <Login/>
          </div>
        }/>

        <Route path="/content" element={<Content/>}>
          <Route index element={<Term/>}/>
          <Route path="import" element={<HomePage/>}/>
        </Route>

      </Routes>

    </div>
    </Router>
  );
}

export default App;
