import React, { useState, useCallback, useEffect, useRef } from 'react';
import './Scheduler.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import HomePageUtils from '../../api/HomePageUtils';
import RequestUtils from '../../api/RequestUtils';

export default function Scheduler(props) {

  const [units, setUnits] = useState({});


  const removeCourse = (course) => {

    fetch(RequestUtils.getAPIHost() + "course-information", {
      headers: {
        'authorization': localStorage.token,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        courseName: course,
        action: "DROP"
      })
    }).then(res => res.json()).then(res => {
      if(res.status == "error"){
        alert(res.reason);
        return;
      }

      var copy = props.projectedCourses.slice(0);
      copy = copy.filter(a => a.course != course);

      props.setProjectedCourses(copy);
    });

  };

  const addCourse = (course) => {
    fetch(RequestUtils.getAPIHost() + "course-information", {
      headers: {
        'authorization': localStorage.token,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        courseName: course,
        action: "ADD"
      })
    }).then(res => res.json()).then(res => {
      if(res.status == "error"){
        alert(res.reason);
        return;
      }

      var copy = props.projectedCourses.slice(0);
      copy.push({finalized: 0, course: course, last_updated: Date.now()});

      props.setProjectedCourses(copy);
    });
  };

  let projectedCourseEl = [];

  for(let projectedCourse of props.projectedCourses){
    projectedCourseEl.push(
      <div key={projectedCourse.course} className="course-container">
        <h4>{projectedCourse.course}</h4>
        <div className="tooltip">
          <button className='csn-btn-icon' onClick={() => {removeCourse(projectedCourse.course)}}><FontAwesomeIcon icon="minus" /></button>
        </div>
      </div>
    )
  }

  return (
    <div className="home-comp">
      <div className="scheduler-container">
        <center><h3>Next Semester</h3></center>
        <center><h4 className="scheduler-subtitle">Unfinalized List</h4></center>
        <hr />
        {projectedCourseEl}
        <div className="scheduler-center">
          {props.projectedCourses.length > 0 && <button className="csn-btn" onClick={props.tryFinalize}>Finalize!</button>}
        </div>
        <SearchBar majorData={props.majorData} addClass={addCourse} />
      </div>
    </div>
  )
}
