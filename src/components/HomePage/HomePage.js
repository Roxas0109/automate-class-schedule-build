import React from 'react'
import './HomePage.css'
import History from './History';
import Scheduler from './Scheduler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

export default function HomePage() {

  //Grab data from the server
  //Pass the data as props
    return (
        <div>
            <center><h1>Term: Spring 2022</h1></center>
            <History/>
            <Scheduler/>
        </div>
    )
}


/*  <Link to="/content/add">
      <button className="redBtn"><FontAwesomeIcon icon="plus" /> Add Class</button>
  </Link>
  <div className="pClasses">
      <ProjectedClasses />
  </div>
  <div className="eCourses">
      <EligibleCourses />
  </div>
  <div className="cCourses">
      <CompletedCourses />
  </div>
  <Link to="/content/submit">
      <button className="redBtn"><FontAwesomeIcon icon="check" /> Submit</button>
  </Link>*/
