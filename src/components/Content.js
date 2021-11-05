import React from 'react'
import logo  from '../ECSlogo.jpg';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';


export default function Content() {
    return (
        <div style={{height: "100%"}}>
            <NavigationBar/>
            <img alt="ECS logo" src={logo} className="ECSlogo"/>
            <div className="page-content">
            <Outlet/>
            </div>
        </div>
    )
}
