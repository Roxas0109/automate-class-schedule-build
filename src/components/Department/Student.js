import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import HomePageUtils from '../../api/HomePageUtils';
import RequestUtils from '../../api/RequestUtils';
// import './Student.css'

export default function Student() {
    const navigate = useNavigate();
    const { studentID } = useParams();
    const [studentData, setStudentData] = useState(null);

    const [completedCourses, setCompletedCourses] = useState([]);

    const [isExpanded, setExpanded] = useState({});

    const fetchStudentData = async () => {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }
        const studentIDFetch = await fetch(RequestUtils.getAPIHost() + `project/student/${studentID}`, options)
        const studentIDData = await studentIDFetch.json()

        if (studentIDData.status == "success") {

            if(studentIDData.data.completedCourses.length == 0 && Object.keys(studentIDData.data.projectedCourses).length == 0){
              navigate("/");
              alert("No data found on user.");
              return;
            }

            setStudentData(studentIDData.data)
            setCompletedCourses(studentIDData.data.completedCourses);
        }
    }

    useEffect(() => {
        fetchStudentData();
    }, []);

    const getDPR = () => {

        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/pdf",
                "authorization": localStorage.getItem("token"),
            }
        }

        fetch(RequestUtils.getAPIHost() + `download-dpr/${studentID}`, options)
            .then(response => response.blob())
            .then((blob) => {

                if(blob.size < 1000){
                  alert("DPR not found.");
                  return;
                }

                const url = window.URL.createObjectURL(
                    new Blob([blob], {type: 'application/pdf'})
                )
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('target', '_blank')
                document.body.appendChild(link)
                link.click()
                link.parentNode.removeChild(link)
            }).catch(err => {
              alert("DPR not found.");
            });
    }

    const toggleExpand = (term) => {
      if(isExpanded[term] == null){
        isExpanded[term] = 1;
      }else{
        delete isExpanded[term];
      }
      setExpanded(JSON.parse(JSON.stringify(isExpanded)));
    };

    let studentCourses = [];

    let studentCourseMap = {};

    for(let row of completedCourses){
      if(studentCourseMap[row.term] == null){
        studentCourseMap[row.term] = [];
      }
      studentCourseMap[row.term].push(row.course);
    }

    const semesterNames = {"FA": "Fall", "SP": "Spring", "SU": "Summer"}

    for(let term in studentCourseMap){
      let prettySemester = semesterNames[term.substring(2,4)] + " 20" + term.substring(0,2)
      let courses = [];
      if(isExpanded[term] != null){
        for(let course of studentCourseMap[term]){
          courses.push((<div key={course} className="semester-course"><h4>{course}</h4></div>));
        }
      }
      studentCourses.push(
      <div className="semester-courses-container">
        <div onClick={() => {toggleExpand(term)}}className="semester-drop">
          <h4>{prettySemester}</h4>
        </div>
        {courses}
      </div>
      );
    }

    return (
        <div>
            <center><h1>Student: {studentID}</h1></center>
            <div className='home-comp'>
                <center><h3>Past Semesters</h3></center>
                {studentCourses}
            </div>
            <div className='home-comp'>
                <center><h3>Projected Courses</h3></center>
                <div className='semester-container'>
                    {studentData != null && studentData.projectedCourses.map((obj, i) => {
                        return (
                            <div>
                                <center><h4>{obj.course}</h4></center>
                            </div>
                        )
                    })}
                </div>
            </div>
            <center><button target="_blank" type="button" className="csn-btn" onClick={getDPR}>Download DPR</button></center>
        </div>
    )
}
