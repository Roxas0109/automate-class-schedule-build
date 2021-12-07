import React, { useState, useCallback, useEffect } from 'react';
import './History.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function History(props) {
    const semesterData = {};
    const semesterNames = {"FA": "Fall", "SP": "Spring", "SU": "Summer"}

    const [expandedData, setExpandedData] = useState([]);

    const toggleData = useCallback((semester) => {
      var copy = [...expandedData];
      console.log(copy);
      if(copy.indexOf(semester) != -1){
        copy.splice(copy.indexOf(semester), 1);
      }else{
        copy.push(semester);
      }
      console.log(copy);
      setExpandedData(copy);
    });
    console.log(expandedData);

    const addSemesterData = () =>{
       for(let [key, value] of Object.entries(props.history).sort()){
         let modifyKey = semesterNames[key.substring(2,4)] + " 20" + key.substring(0,2)
        semesterData[modifyKey] = Object.keys(value);
       }
      }
      addSemesterData();

    const listItems = Object.keys(semesterData).map((semester) => {
      return (
        <div>
          <div className="semester-drop" onClick={() => {toggleData(semester)}}>
            <h4>{semester}</h4>
            <FontAwesomeIcon icon="caret-down"/>
          </div>
          {expandedData.indexOf(semester) != -1 &&
            <div className="semester-courses-container">
              {semesterData[semester].map((i) => {
                return (
                  <div className="semester-course"><h4>{i}</h4></div>
                );
              })}
            </div>
          }
        </div>
      );
    });


    return (
        <div className="home-comp">
          <center><h3>Past Semesters</h3></center>
          <div className="semester-container">
            {listItems}
          </div>
        </div>
    )
}
