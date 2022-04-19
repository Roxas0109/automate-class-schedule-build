import React from 'react'
import './Content.css'
import logo from '../ECSlogo.jpg';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
// import { useSelector } from 'react-redux';
// import { overlaySelector } from '../features/overlay/OverlaySlice';


export default function Content() {

    // const overlay = useSelector(overlaySelector)

    return (
        <div className="contentContext">
            <LoadingOverlay
                // active={overlay}
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
