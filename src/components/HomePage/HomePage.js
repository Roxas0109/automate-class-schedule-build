import './HomePage.css'
import History from './History';
import Scheduler from './Scheduler';
import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import HomePageUtils from "../../api/HomePageUtils";
import RequestUtils from "../../api/RequestUtils";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const { state } = useLocation();
    const [studentData, setStudentData] = useState();

    const [shouldConfirm, setShouldConfirm] = useState(false);
    const navigate = useNavigate();

    const [finalized, setFinalized] = useState(false);

  //  const fileFormData = new FormData();
  //  fileFormData.append('files', state.files[Object.keys(state.files)[0]])


    const [completedCourses, setCompletedCourses] = useState({});
    const [projectedCourses, setProjectedCourses] = useState({});
    const [majorData, setMajorData] = useState({});

    const tryFinalize = () => {
      let confirmed = window.confirm("Are you sure? You cannot projections after finalizing.");
      fetch(RequestUtils.getAPIHost() + "finalize", {
        headers: {
          'authorization': localStorage.token,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({})
      }).then(res => res.json()).then(res => {
        if(res.status == "error"){
          alert("Could not finalize! Contact Administration.");
          return;
        }
        setFinalized(true);
      });
    };

    useEffect(() => {
        fetch(RequestUtils.getAPIHost() + "course-information", {
          headers: {
            'authorization': localStorage.token
          }
        }).then(res => res.json()).then(res => {

          let totalCourses = res.data.completedCourses.length+res.data.projectedCourses.length;

          if(totalCourses == 0){//Prompt the user, ask if they need to import.
            let confirmed = window.confirm("We don't see any courses in our database for you, would you like to upload a DPR?");
            if(confirmed){
              navigate("/import");
              return;
            }
          }


          let fittedObj = {};
          for(let completedCourse of res.data.completedCourses){
            let term = completedCourse.term;
            if(fittedObj[term] == null){
              fittedObj[term] = {};
            }
            fittedObj[term][completedCourse.course] = true;
          }

          //If ANY courses are finalized and projected, then finalized true

          var finalized = (res.data.projectedCourses.filter(a => a.finalized == 1).length > 0);
          if(finalized){
            setFinalized(true);
            return;
          }

          setMajorData(res.data.majorData);
          setCompletedCourses(fittedObj);
          setProjectedCourses(res.data.projectedCourses);
          setStudentData({suggestion: {}});
        });
        /*HomePageUtils.postAndCallback("/api/import", fileFormData, (data) => {
            console.log(data);
            if (data.status === "success") {
                console.log(data.semester);
                setStudentData(data)
            }
            else
                alert("Not working");
        }, { authorization: localStorage.getItem('token') });*/

    }, []);

    if (finalized){
      return (
          <div className='finalized'>
            <h2>Finalized!</h2>
            <p>Your data is already finalized, there is nothing left to be done.</p>
          </div>
      );
    }

    return (
        <div>
            {studentData &&
                <div>
                    <center><h1>Term: Spring 2022</h1></center>
                    <History history={completedCourses} />
                    <Scheduler toggleConfirm={() => { setShouldConfirm(true) }} tryFinalize={tryFinalize} majorData={majorData} setProjectedCourses={setProjectedCourses} projectedCourses={projectedCourses} />
                </div>
            }
        </div>
    )
}

//  <Scheduler toggleConfirm={() => { setShouldConfirm(true) }} suggestion={studentData.data} />
