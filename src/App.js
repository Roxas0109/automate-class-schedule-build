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
} from "react-router-dom";
import Content from './components/Content';
import Term from './components/Term';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus, faCaretDown, faFileExcel, faRedo } from '@fortawesome/free-solid-svg-icons';
import Department from './components/Department';
library.add(faPlus, faAngleLeft, faSignOutAlt, faCheck, faInfo, faUpload, faMinus, faCaretDown, faFileExcel, faRedo )

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
              <Route path="submit" element={<Submitted />} />
              <Route path="admin" element={<Department/>} />
            </Route>

          </Routes>
        </div>
      </Router>

  );
}

export default App;
