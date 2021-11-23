import React from 'react'
import './HomePage.css'
import ProjectedClasses from './ProjectedClasses'
import EligibleCourses from './EligibleCourses'
import CompletedCourses from './CompletedCourses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomePage() {
    return (
        <div className="homeCont">
            <h1>Term: Spring 2022</h1>
            <button className="redBtn"><FontAwesomeIcon icon="plus" /> Add Class</button>
            <div className="pClasses">
                <ProjectedClasses />
            </div>
            <div className="eCourses">
                <EligibleCourses />
            </div>
            <div className="cCourses">
                <CompletedCourses />
            </div>
            <button className="redBtn"><FontAwesomeIcon icon="check"/> Continue</button>
        </div>
    )
}
