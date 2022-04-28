import './Import.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { setLoader } from '../features/overlay/OverlaySlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomePageUtils from '../api/HomePageUtils'

export default function Import() {

    const [showBtn, setShowBtn] = useState(null)
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        HomePageUtils.getAndCallback("/api/course-information", (data) => {
            console.log(data)
            if (data.success) {
                console.log("move")
                localStorage.setItem("dont","don't do it!")
                navigate('/content/home')
            }
            else {
                console.log("wtf")
            }
        }, { authorization: localStorage.getItem('token') })
    }, [])

    const handleChange = (e) => {
        setShowBtn(
            <button className="redBtn" onClick={() => {
                // dispatch(setLoader(true))
                setTimeout(() => { // Set timout for example purpose.
                    // dispatch(setLoader(false))
                    navigate('/content/home', { state: { files: e.target.files } })
                }, 2000)
            }}>Analyze</button>
        )
    }


    return (
        <div className="importContainer">
            <div className="importWrapper">
                <h1>Import Degree Progress Report (DPR)</h1>
                <input className="import" type='file' accept='application/pdf' id='imp' onChange={handleChange}></input>
                <label for='imp' className='redBtn'><FontAwesomeIcon className='ic' icon="upload" />Import</label>
                <br />
                {showBtn}
                <br />
                <button className="redBtn">Load previous DPR</button>
            </div>
        </div>
    )
}

