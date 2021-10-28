

import './Upload.css'
import NavigationBar from './NavigationBar'
import React, { Component } from 'react';
import logo from './../ECSlogo.jpg';
import { Route, Switch, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';


export default class Import extends Component {
    render() {
        return (
            <div>
                <div className="upload-container">
                    <NavigationBar />
                    <img alt="ECS logo" src={logo} className="ECSlogo" />
                    <div className='content-view'>
                        <h1>Import Degree Progress Report (DPR)</h1>
                            <div className="continueBtn">                                    
                                <button class="redBtn">Import File</button>                                    
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
