import './Submitted.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Submitted() {
    return (
        <div className="submittedContainer">
            <h1>Submitted!</h1>
            <br/>
            <h3>Please sign out or close window</h3>
            {/* <div className="submittedContainer">               
                <label>Submitted!</label>                 
            </div> 
            <div className="containerBelowSubmittedContainer">
                <label>Please sign out or close window.</label>
            </div>      */}
        </div>
    )
}