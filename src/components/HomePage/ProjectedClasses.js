import React from 'react'
import ClassInfo from './ClassInfo'

export default function ProjectedClasses() {

    const data = [{ "Course": "Mathematics 481A", "Title": "NUMERICAL ANALYSIS", "Description": "Prerequisites: COMP 110/L; Completion of MATH 262 with a grade of 'C' or better. Techniques of applied mathematics, solution of equations, interpolation, numerical integration and numerical solution of differential equations. Available for graduate credit."
}]  
    const desc = "Prerequisites: COMP 110/L; Completion of MATH 262 with a grade of 'C' or better. Techniques of applied mathematics, solution of equations, interpolation, numerical integration and numerical solution of differential equations. Available for graduate credit."

    const listItems = data.map((item)=> {
        return(
        <li><h1>Hi</h1>
            {item.Course}
            <ClassInfo label='info'>
                <p>{item.Title}{item.Description}</p></ClassInfo></li>)

    })

    return (
        <div>
            <h2>Projected Classes:</h2>
            <ul>
                {listItems}
                {/* <li>Sample Course
                    <ClassInfo label='info'>
                        <p>Info on class</p></ClassInfo></li>
                <li>Sample Course</li>
                <li>Sample Course</li> */}
            </ul>
        </div>
    )
}
