import React from 'react'
import './Content.css'
import logo from '../ECSlogo.jpg';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

export default function Content() {
    return (
        <div className="contentContext">
            <LoadingOverlay
                styles={{
                    wrapper: {},
                }}
                spinner
                text='Analyzing...'>
                    <NavigationBar />
                    <img alt="ECS logo" src={logo} className="ECSlogo" />
                    <div className="page-content">
                        <Outlet />
                    </div>
            </LoadingOverlay>
        </div>
    )
}
