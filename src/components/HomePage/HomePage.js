import React from 'react'
import './HomePage.css'
import ProjectedClasses from './ProjectedClasses'
import EligibleCourses from './EligibleCourses'
import CompletedCourses from './CompletedCourses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="homeCont">
            <h1>Term: Spring 2022</h1>
            <Link to="/content/add">
                <button className="redBtn"><FontAwesomeIcon icon="plus" /> Add Class</button>
            </Link>
            <div className="pClasses">
                <ProjectedClasses />
            </div>
            <div className="eCourses">
                <EligibleCourses />
            </div>
            <div className="cCourses">
                <CompletedCourses />
            </div>
            <Link to="/content/submit">
                <button className="redBtn"><FontAwesomeIcon icon="check" /> Submit</button>
            </Link>
        </div>
    )
}
