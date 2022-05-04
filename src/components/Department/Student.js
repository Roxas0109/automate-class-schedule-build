import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import HomePageUtils from '../../api/HomePageUtils';
// import './Student.css'

export default function Student() {

    const { studentID } = useParams();
    const [studentData, setStudentData] = useState(null);


    const fetchStudentData = async () => {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }
        const studentIDFetch = await fetch(`http://localhost:80/api/project/student/${studentID}`, options)
        const studentIDData = await studentIDFetch.json()

        if (studentIDData.status == "success") {
            setStudentData(studentIDData.data)
        } else {
            alert("NOT WOKRING (CHANGE LATER)")
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

        fetch(`http://localhost:80/api/download-dpr/${studentID}`, options)
            .then(response => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(
                    new Blob([blob])
                )
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('target', '_blank')
                document.body.appendChild(link)
                link.click()
                link.parentNode.removeChild(link)
            })
    }

    return (
        <div>
            <center><h1>Student: {studentID}</h1></center>
            <div className='home-comp'>
                <center><h3>Past Semesters</h3></center>
                {studentData != null && studentData.completedCourses.map((obj, i) => {
                    return (
                        <div className="semester-drop">
                            <center><h4>{obj.course} {obj.term}</h4></center>
                        </div>
                    )
                })}
            </div>
            <div className='home-comp'>
                <center><h3>Projected Courses</h3></center>
                <div className='semester-container'>
                    {studentData != null && studentData.projectedCourses.map((obj, i) => {
                        return (
                            <div>
                                <center><h4>{obj.course} {obj.term}</h4></center>
                            </div>
                        )
                    })}
                </div>
            </div>
            <center><button target="_blank" type="button" className="redBtn" onClick={getDPR}>Download DPR</button></center>
        </div>
    )
}
