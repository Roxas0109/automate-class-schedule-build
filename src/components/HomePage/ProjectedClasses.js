import React from 'react'
import ClassInfo from './ClassInfo'

export default function ProjectedClasses() {
    return (
        <div>
            <h2>Projected Classes:</h2>
            <ul>
                <li>Sample Course
                    <ClassInfo label = 'info'>
                    <p>Info on class</p></ClassInfo></li>
                <li>Sample Course</li>
                <li>Sample Course</li>
            </ul>
        </div>
    )
}
