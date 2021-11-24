import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './ClassInfo.css'

export default function ClassInfo({ children, label, title }) {

    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <>
            <button className='redBtn info' onClick={()=>{
                setIsCollapsed(!isCollapsed)
            }}><FontAwesomeIcon icon="info"/>{label}</button>
            <h5>{title}</h5>
            <div className= {isCollapsed ? 'content show' : 'content'}>{children}</div>
        </>
    )
}
