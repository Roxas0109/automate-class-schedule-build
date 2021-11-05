import './AddCourses.css'
import React from 'react'

export default function AddCourses() {
    return (
        <div>
            <div class="container">
                <div class="Desired-Courses">
                <h1>Desired Courses</h1>
                    <br/>
                    <h3>No classes added!</h3>
                </div>
                <div class="Add-Courses-for-Spring-2022">
                    <h1>Add Courses for Spring 2022</h1>
                    <br/>
                    
                    <div class="selectWrapper">
                    <span>Subject</span>
                        <select class="selectBox">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <br/>
                    <div class="selectWrapper">
                    <span>Course</span>
                        <select class="selectBox">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <br/>
                    <div className="continueBtn">
                        <button class="redBtn">Import File</button>
                        <button class="redBtn">Import File</button>
                    </div>

                </div> 
            </div>   
        </div>
    )
}