import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Chart } from "../Department/Chart";
import RequestUtils from '../../api/RequestUtils';

import './Course.css'
export default function Course() {

    const navigate = useNavigate();

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
        const courseFetch = await fetch(RequestUtils.getAPIHost() + `project/course/${courseName}`, options)
        const courseData = await courseFetch.json()

        if (courseData.status === "success") {
            setCourseData(courseData.data)
        } else {
            navigate("/");
            alert("No data found on course.");
            return;
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
