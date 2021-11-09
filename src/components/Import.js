import './Import.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoader } from '../features/overlay/OverlaySlice'

export default function Import() {

    const [showBtn, setShowBtn] = useState(null)
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setShowBtn(
            <button className="redBtn" onClick={()=>{
                dispatch(setLoader(true))
                setTimeout(() => { // Set timout for example purpose.
                    dispatch(setLoader(false))
                }, 2000)
            }}>Import</button>
        )
    }

    return (
        <div className="importContainer">
            <div className="importWrapper">
                <h1>Import Degree Progress Report (DPR)</h1>
                <input className="redBtn" type='file' accept='application/pdf' onChange={handleChange}></input>
                <br/>
                {showBtn}
            </div>
        </div>
    )
}

