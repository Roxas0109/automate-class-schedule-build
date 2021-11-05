import './Submitted.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Submitted() {
    return (
        <div>       
            <div className="submittedContainer">               
                <label>Submitted!</label>                 
            </div> 
            <div className="containerBelowSubmittedContainer">
                <label>Please sign out or close window.</label>
            </div>     
        </div>
    )
}