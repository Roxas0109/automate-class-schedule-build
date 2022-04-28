import './HomePage.css'
import History from './History';
import Scheduler from './Scheduler';
import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import HomePageUtils from "../../api/HomePageUtils";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const { state } = useLocation();
    const [studentData, setStudentData] = useState();

    const [shouldConfirm, setShouldConfirm] = useState(false);
    const navigate = useNavigate();

    const fileFormData = new FormData();
    
    useEffect(() => {
        if (localStorage.getItem("dont")) {
            HomePageUtils.getAndCallback("/api/course-information", (data) => {
                console.log(data)
                if (data.success) {
                    console.log("use data!")
                }
                else {
                    console.log("wtf")
                }
            }, { authorization: localStorage.getItem('token') })
        } else {
            fileFormData.append('files', state.files[Object.keys(state.files)[0]])
            HomePageUtils.postAndCallback("/api/import", fileFormData, (data) => {
                console.log(data);
                if (data.status === "success") {
                    console.log(data);
                    setStudentData(data)
                }
                else
                    alert("Not working");
            }, { authorization: localStorage.getItem('token') });
        }
    }, []);

    const confirmSubmit = function () {

    }

    return (
        <div>
            {
                shouldConfirm &&
                <div className='dis-background'>
                    <div className="popup-comp">
                        <p>Are you sure?</p>
                        <div>
                            <button className="cancel-btn" onClick={() => { setShouldConfirm(false) }}>Cancel</button>
                            <button onClick={() => {
                                navigate('/content/submit')
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            }
            {studentData &&
                <div>
                    <center><h1>Term: Spring 2022</h1></center>
                    <History history={studentData.semester} />
                    <Scheduler toggleConfirm={() => { setShouldConfirm(true) }} suggestion={studentData.data} />
                </div>
            }
        </div>
    )
}


