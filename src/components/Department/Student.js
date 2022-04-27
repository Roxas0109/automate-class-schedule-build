import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function Student() {

    const { studentID } = useParams();
    const [data, setData] = useState(null);


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
            console.log(studentIDData.data);
            setData(studentIDData.data)
        } else {
            alert("NOT WOKRING (CHANGE LATER)")
        }
    }

    useEffect(() => {
        fetchStudentData();
    }, []);

    return (
        <div>
            <h1>Student {studentID}</h1>
        </div>
    )
}
