import './Confirm.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popupSelector, setPop } from '../../features/popup/PopupSlice'
import { useNavigate } from 'react-router-dom'

export default function Confirm() {
    const navigate = useNavigate()
    const popup = useSelector(popupSelector)
    const dispatch = useDispatch()

    return (
        <div className={popup ? "popup" : 'no-pop'}>
            <div className="popup-cont">
                <p>Are you sure?</p>
                <button onClick={()=>dispatch(setPop(false))}>Cancel</button>
                <button onClick={()=>{
                    dispatch(setPop(false))
                    navigate('/content/submit')
                    }}>Submit</button>
            </div>
            
        </div>
    )
}