import './Upload.css'
import NavigationBar from './NavigationBar'
import React from 'react'
import logo from './../ECSlogo.jpg';
import { Route, Switch, useRouteMatch } from 'react-router'
import Import from './Import';
import { Link } from 'react-router-dom';

export default function Upload() {
    return (
        <div>
            <div className="upload-container">
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
        </div>
        
    )
}

