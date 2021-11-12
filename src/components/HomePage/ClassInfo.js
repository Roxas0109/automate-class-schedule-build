import React, { useState } from 'react'
import './ClassInfo.css'

export default function ClassInfo({ children, label }) {

    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div>
            <button className='redBtn' onClick={()=>{
                setIsCollapsed(!isCollapsed)
            }}>{label}</button>
            <div className= {isCollapsed ? 'content show' : 'content'}>{children}</div>
        </div>
    )
}
