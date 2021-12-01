import React, { useState, useCallback } from 'react';
import './History.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function History() {

    const semesterData = {
      "Fall 2019": ["COMP 110", "COMP 110L", "PHYS 220A", "PHYS 220AL"],
      "Spring 2020": ["COMP 310", "COMP 322", "COMP 322L", "MATH 482"],
      "Fall 2020": ["COMP 256", "COMP 256L", "COMP 333", "COMS 356", "JAPN 101", "PHIL 330"]
    };

    const [expandedData, setExpandedData] = useState([]);

    const toggleData = useCallback((semester) => {
      var copy = [...expandedData];
      if(copy.indexOf(semester) != -1){
        copy.splice(copy.indexOf(semester), 1);
      }else{
        copy.push(semester);
      }
      setExpandedData(copy);
    });
    console.log(expandedData);

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
