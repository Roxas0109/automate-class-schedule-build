import React, { useState } from 'react'
import './ClassInfo.css'

export default function ClassInfo({ children, label, title }) {

    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <>
            <button className='redBtn' onClick={()=>{
                setIsCollapsed(!isCollapsed)
            }}>{label}</button>
            <h5>{title}</h5>
            <div className= {isCollapsed ? 'content show' : 'content'}>{children}</div>
        </>
    )
}
