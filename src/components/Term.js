import './Term.css'
import React from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import logo from './../ECSlogo.jpg';

export default function Term() {
    return (
        <div className="container">
            <NavigationBar />
            <img alt="ECS logo" src={logo} className="ECSlogo" />
            <div className='content-view'>
                <h1>Select Term</h1>
                <div className="term-div">
                    <input type="radio" />
                    <label>Spring 2020</label>
                </div>

                <div className="continueBtn">
                    <Link to={`/import`}>
                        <button class="redBtn">Save and Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
