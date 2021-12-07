import './HomePage.css'
import History from './History';
import Scheduler from './Scheduler';
import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import HomePageUtils from "../../api/HomePageUtils"

export default function HomePage() {

    const { state } = useLocation();
    const [studentData, setStudentData] = useState();


    const fileFormData = new FormData();
    fileFormData.append('files', state.files[Object.keys(state.files)[0]])

    useEffect(() => {
        HomePageUtils.postAndCallback("/api/import",fileFormData, (data) =>{
            if(data.status === "success")
                setStudentData(data)
        });
    }, []);

    return (
        <div>
            {studentData &&
                <div>
                    <center><h1>Term: Spring 2022</h1></center>
                    <History history = {studentData.semester}/>
                    <Scheduler suggestion={studentData.data} />
                </div>
            }      
        </div>
    )


    //Grab data from the server
    //Pass the data as props
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
