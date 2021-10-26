import React, { Component } from 'react'
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        return (
            <div className = 'nav-container'>
                <nav>
                    <h1 className  = "title-name"> Projected Schedule Planner</h1>
                    <button className = "sign-out">Sign Out</button>
                </nav>
            </div>
        )
    }
}
