import React from 'react'
import './NavigationBar.css';

export default function NavigationBar() {
    return (
        <div className='nav-container'>
            <nav>
                <h1 className="title-name"> Projected Schedule Planner</h1>
                <button className="sign-out">Sign Out</button>
            </nav>
        </div>
    )
}