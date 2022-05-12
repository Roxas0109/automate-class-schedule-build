import React from 'react';
import './App.css';
import Login from './components/Login';
import Import from './components/Import';
import HomePage from './components/HomePage/HomePage';
import Student from './components/Department/Student'
import Course from './components/Department/Course'
import logo from './ECSlogo.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Content from './components/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Navigate } from "react-router-dom";
import { faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus, faCaretDown, faFileExcel, faRedo } from '@fortawesome/free-solid-svg-icons';
import Department from './components/Department/Department';
import Allocation from './components/Department/Allocation';
import { connect } from 'react-redux';
library.add(faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus, faCaretDown, faFileExcel, faRedo)

function App(props) {
  const { auth } = props
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={localStorage.getItem('token') ? <Content /> : <Navigate to='/login' />}>
            <Route index element={auth.user.role === 0? <HomePage/> : <Department/>} />
            <Route path="home" element={<HomePage />} />
            <Route path="import" element={<Import />} />
            <Route path="allocation" element={<Allocation />} />
            <Route path = "course/:courseName" element={<Course/>}/>
            <Route path = "student/:studentID" element={<Student/>}/>
          </Route>
          <Route path="/login" element={<Login/>} />

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
