import './AddCourses.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function AddCourses() {
    return (
        <div>
            <div class="container">
                <h1><u>Add Courses for Spring 2022</u></h1>
                <br />

                <label className="fLabel"><b>Subject</b>
                    <select class="uInput">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </label>
                <br />

                <label className="fLabel"><b>Course</b>
                    <select class="uInput">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </label>
                <br />
                <div className="continueBtn">
                    <Link to="/home">
                        <button class="redBtn"><FontAwesomeIcon icon="angle-left" /> Back</button>
                    </Link>
                    <button class="redBtn"><FontAwesomeIcon icon="plus" /> Add Class</button>
                </div>
            </div>
        </div>
    )
}