import { useState } from "react"
import {useNavigate } from "react-router-dom";
import "./Department.css"

export default function Department() {

    const [studentID, setStudentID] = useState('');
    const [course, setCourse] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(studentID.length > 0)
            navigate(`/content/student/${studentID}`);
        else
            navigate(`/content/course/${course}`);
    }

    return (
        <div>
            <div className = "department-wrapper">
                <h1>Student</h1>
                <input type = "text" className="csn-inp csn-expand" placeholder="CSUN Student ID" onChange ={(e) => {setStudentID(e.target.value)}}></input>
                <h1>Course</h1>
                <input type = "text" className="csn-inp csn-expand" placeholder="Enter Course" onChange ={(e) => {setCourse(e.target.value)}}></input>
                <button tyoe = "submit" className="redBtn" onClick={handleSubmit}>Serach</button>
            </div>
        </div>
    )
}