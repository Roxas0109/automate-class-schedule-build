import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Chart } from "../Department/Chart";
import './Course.css'
export default function Course() {

    const { courseName } = useParams();
    const [courseData, setCourseData] = useState({});

    const fetchCourseData = async () => {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        }
        const courseFetch = await fetch(`http://localhost:80/api/project/course/${courseName}`, options)
        const courseData = await courseFetch.json()

        if (courseData.status === "success") {
            setCourseData(courseData.data)
        } else {
            alert("NOT WOKRING (CHANGE LATER)")
        }
    }

    useEffect(() => {
        fetchCourseData();
    }, []);

    return (
        <div>
            <div className='course-wrapper'>
                <h1>Course: {courseName}</h1>
                <h2>Number of Students Projected for {courseData.projectedTerm}: {courseData.studentsProjected == 0 ? 0 :courseData.studentsProjected}</h2>
                <Chart chartData={courseData.historicalData} />
            </div>
        </div>
    )
}
