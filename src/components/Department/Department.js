import { useState } from "react"
import {useNavigate } from "react-router-dom";
import "./Department.css"

export default function Department() {

    const [studentID, setStudentID] = useState('');
    const [course, setCourse] = useState('');
    const navigate = useNavigate();

    const handleStudentSubmit = (e) => {
        if(studentID.length > 0)
            navigate(`/student/${studentID}`);
    }

    const handleCourseSubmit = (e) => {
        if(course.length > 0)
            navigate(`/course/${course}`);
    }

    return (
        <div>
            <div className = "department-wrapper">
                <h1>Student</h1>
                <input type = "text" className="csn-inp csn-expand" placeholder="CSUN Student ID" onChange ={(e) => {setStudentID(e.target.value)}}></input>
                <button tyoe = "submit" className="redBtn" onClick={handleStudentSubmit}> Student Search</button>
                <h1>Course</h1>
                <input type = "text" className="csn-inp csn-expand" placeholder="Enter Course" onChange ={(e) => {setCourse(e.target.value)}}></input>
                <button tyoe = "submit" className="redBtn" onClick={handleCourseSubmit}> Course Search</button>
            </div>
        </div>
    )
}
