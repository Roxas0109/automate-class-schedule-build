import React from 'react'
import logo  from '../ECSlogo.jpg';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';


export default function Content() {

    return (
        <div>
            <NavigationBar/>
            <img alt="ECS logo" src={logo} className="ECSlogo"/>
            <Outlet/>
        </div>
    )
}
