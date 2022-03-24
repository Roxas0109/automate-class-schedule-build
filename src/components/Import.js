import './Import.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoader } from '../features/overlay/OverlaySlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Import() {

    const [showBtn, setShowBtn] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setShowBtn(
            <button className="redBtn" onClick={()=>{
                dispatch(setLoader(true))
                setTimeout(() => { // Set timout for example purpose.
                    dispatch(setLoader(false))
                    navigate('/content/home', {state: {files: e.target.files}})
                }, 2000)
            }}><FontAwesomeIcon icon="upload"/>Import</button>
        )
    }


    return (
        <div className="importContainer">
            <div className="importWrapper">
                <h1>Import Degree Progress Report (DPR)</h1>
                <input className="redBtn" type='file' accept='application/pdf' onChange={handleChange}></input>
                <br/>
                {showBtn}
                <br/>
                <button className="redBtn">Open Previous Save</button>
            </div>
        </div>
    )
}

