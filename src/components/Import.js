import './Import.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { setLoader } from '../features/overlay/OverlaySlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RequestUtils from "../api/RequestUtils";

export default function Import() {

    const [showBtn, setShowBtn] = useState(null)
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) =>{
          const fileFormData = new FormData();
          fileFormData.append('files', e.target.files[0])

          fetch(RequestUtils.getAPIHost() + "import", {
            headers: {
              'authorization': localStorage.token
            },
            method: 'POST',
            body: fileFormData
          }).then(res => res.json()).then(res => {
            if(res.status == "error"){
              let reason = res.message || "Failed to upload.";
              alert(reason);
              return;
            }
            navigate("/");
          });
    }


    return (
        <div className="importContainer">
            <div className="importWrapper">
                <h1>Import Degree Progress Report (DPR)</h1>
                <input className="import" type='file' accept='application/pdf' id='imp' onChange={handleChange}></input>
                <label for='imp' className='csn-btn'><FontAwesomeIcon className='ic' icon="upload"/>Import</label>
                <br/>
                <br/>
                <button className="csn-btn" onClick={() => navigate("/")}>Return to home</button>
            </div>
        </div>
    )
}
