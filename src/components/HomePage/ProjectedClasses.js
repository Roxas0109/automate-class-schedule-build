import React from 'react'
import ClassInfo from './ClassInfo'
import './ProjectedClasses.css'

export default function ProjectedClasses() {

    const data = [
        {
            "Course": "Mathematics 481A",
            "Title": "NUMERICAL ANALYSIS",
            "Description": "Prerequisites: COMP 110/L; Completion of MATH 262 with a grade of 'C' or better. Techniques of applied mathematics, solution of equations, interpolation, numerical integration and numerical solution of differential equations. Available for graduate credit."
        },
        {
            "Course": "Computer Science 440",
            "Title": "DATABASE DESIGN",
            "Description": "Prerequisite: COMP 380/L; attempted upper-division writing exam. Database structure including: structure definition, data models, semantics of relations, operation on data models. Database schemas: element definition, use and manipulation of the schema. Elements of implementation. Algebra of relations on a database. Hierarchical data bases. Discussion of information retrieval, reliability, protection and integrity of databases. Available for graduate credit."
        },
        {
            "Course": "Computer Science 482",
            "Title": "ALGORITHM DESIGN",
            "Description": "Prerequisites: COMP 282 AND (COMP 256/L OR MATH 326 OR MATH 320). The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation; the application of standard algorithmic approaches, including greedy, divide and conquer, and dynamic programming, to algorithm design; and a review of classical algorithms, including sorting, searching, and graph algorithms."
        },
    ]

    const listItems = data.map((item) => {
        return (
            <div className="courseContainer">
                <h3>{item.Course}</h3>
                <ClassInfo title={item.Title}>
                    <p><b>Title:</b> {item.Title}<br />
                        <b>Description:</b> {item.Description}</p>
                </ClassInfo>
            </div>
        )

    })

    return (
        <div>
            <h2>Projected Classes:</h2>
            {listItems}

        </div>
    )
}
