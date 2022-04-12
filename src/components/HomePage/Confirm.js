import './Confirm.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Confirm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div>
            <div className="popup-cont">
                <p>Are you sure?</p>
                <button >Cancel</button>
                <button onClick={()=>{
                    navigate('/content/submit')
                    }}>Submit</button>
            </div>
            
        </div>
    )
}