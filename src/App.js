import React from 'react';
import './App.css';
import Login from './components/Login';
import Import from './components/Import';
import Submitted from './components/Submitted';
import AddCourses from './components/AddCourses'
import HomePage from './components/HomePage/HomePage';
import logo from './ECSlogo.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Content from './components/Content';
import Term from './components/Term';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus)

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={
            <div>
              <img alt="ECS logo" src={logo} className="ECSlogo" />
              <Login />
            </div>
          } />

          <Route path="content" element={<Content />}>
            <Route index element={<Term />} />
            <Route path="import" element={<Import />} />
            <Route path="home" element={<HomePage />} />
            <Route path="add" element={<AddCourses />} />
            <Route path="submit" element={<Submitted />} />

          </Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
