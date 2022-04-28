import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Chart } from "../Department/Chart";
import './Course.css'
export default function Course() {

    const { courseName } = useParams();

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
            setData(courseData.data)
        } else {
            alert("NOT WOKRING (CHANGE LATER)")
        }
    }

    useEffect(() => {
        fetchCourseData();
    }, []);

    const [data, setData] = useState({});

    return (
        <div>
            <div className='course-wrapper'>
                <h1>Course: {courseName}</h1>
                <h2>Number of Students Projected for {data.projectedTerm}: {data.studentsProjected == 0 ? 0 :data.studentsProjected}</h2>
                <div>
                    <Chart chartData={data.historicalData} />
                </div>
            </div>
        </div>
    )
}
