import './Term.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Term() {
    return (
        <div className="termContainer">

            <h1>Select Term</h1>
            <div className="term-div">
                <input type="radio" />
                <label>Spring 2020</label>
            </div>

            <Link to={'import'}>
                <button className="csn-btn">Save and Continue</button>
            </Link>
        </div>
    )
}
