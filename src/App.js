import React from 'react';
import './App.css';
import Login from './components/Login';
import Import from './components/Import';
import Submitted from './components/Submitted';
import HomePage from './components/HomePage/HomePage';
import DeptHome from './components/Department/DeptHome';
import logo from './ECSlogo.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import Content from './components/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Navigate } from "react-router-dom";
import { faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus, faCaretDown, faFileExcel, faRedo } from '@fortawesome/free-solid-svg-icons';
import Department from './components/Department';
import { connect } from 'react-redux';
library.add(faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus, faCaretDown, faFileExcel, faRedo)

function App(props) {
  const { auth } = props
  console.log(localStorage.getItem('token') + "dslkfjsldkfj");
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
          <Route path="content" element={localStorage.getItem('token') ? <Content /> : <Navigate to='/' />}>
            <Route index element={<Import />} /> 
            <Route path="home" element={<HomePage />} />
            <Route path="submit" element={<Submitted />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </Router>

  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(App);
