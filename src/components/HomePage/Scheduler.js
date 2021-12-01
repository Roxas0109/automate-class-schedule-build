import React, { useState, useCallback } from 'react';
import './Scheduler.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Scheduler() {

  const [projectedClasses, setProjectedClasses] = useState({
      "COMP 482": {
        prettyName: "Computer Science 482"
      },
      "MATH 256": {
        prettyName: "Mathematics 256"
      }
    });

    const [recommendedClasses, setRecommendedClasses] = useState({
      "COMP 512": {
        prettyName: "Computer Science 512"
      },
      "COMP 555": {
        prettyName: "Computer Science 555"
      }
    });

    const addRecommended = useCallback((toAdd)=>{
      console.log("Moving " + toAdd);
      var recommendedClassesCopy = {...recommendedClasses};
      var adding = recommendedClasses[toAdd];
      delete recommendedClassesCopy[toAdd];
      setRecommendedClasses(recommendedClassesCopy);
      var projectedClassesCopy = {...projectedClasses};
      projectedClassesCopy[toAdd] = adding;
      setProjectedClasses(projectedClassesCopy);
    });

    const [classSearch, setClassSearch] = useState('');

    const listItems = Object.keys(projectedClasses).map((name) => {
      return (
        <div className="course-container">
            <h4>{projectedClasses[name].prettyName}</h4>
            <div className="tooltip">
              <button className='csn-btn-icon'><FontAwesomeIcon icon="info"/></button>
              <button className='csn-btn-icon'><FontAwesomeIcon icon="minus"/></button>
            </div>
        </div>
      );
    });

    const recommendedItems = Object.keys(recommendedClasses).map((name) => {
      return (
        <div className="course-container">
            <h4>{recommendedClasses[name].prettyName}</h4>
            <div className="tooltip">
              <button className='csn-btn-icon' onClick={() => {addRecommended(name)}}><FontAwesomeIcon icon="plus"/></button>
            </div>
        </div>
      );
    });

    console.log("State change");
    return (
        <div className="home-comp">
          <div className="scheduler-container">
          <center><h3>Next Semester</h3></center>
          <center><h4 className="scheduler-subtitle">Unfinalized List</h4></center>
          <hr/>
          {listItems}
          <div>
            <center><input type="text" className="csn-inp csn-expand light-tnt" onChange={(e)=>{ setClassSearch(e.target.value); }} placeholder="Add a class..."/></center>
          </div>
          <center><h4 className="scheduler-subtitle">Recommended Classes</h4></center>
          <hr/>
          {recommendedItems}
          </div>
        </div>
    )
}
