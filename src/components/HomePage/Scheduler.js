import React, { useState, useCallback, useEffect, useRef } from 'react';
import './Scheduler.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Scheduler(props) {

  const [projectedClasses, setProjectedClasses] = useState([]);

  const [recommendedClasses, setRecommendedClasses] = useState([]);

  const [unit, setUnit] = useState(0);

  const ref = useRef();

  const addRecommended = useCallback((toAdd) => {
    console.log("Moving " + toAdd);
    var recommendedClassesCopy = {...recommendedClasses };
    var adding = recommendedClasses[toAdd];
    console.log(adding);
    delete recommendedClassesCopy[toAdd];
    setRecommendedClasses(recommendedClassesCopy);
    var projectedClassesCopy = {...projectedClasses };
    projectedClassesCopy[toAdd] = adding;
    setProjectedClasses(projectedClassesCopy);
    setUnit(unit + 3) // When passed unit count?
  });

  const removeClass = useCallback((toRemove) => {
    console.log("Removing" + toRemove);
    let projectedClassesCopy = {...projectedClasses };
    let moveToRecommendedClasses = projectedClasses[toRemove]
    delete projectedClassesCopy[toRemove];
    setProjectedClasses(projectedClassesCopy)
    var recommendedClassesCopy = {...recommendedClasses };
    recommendedClassesCopy[toRemove] = moveToRecommendedClasses;
    setRecommendedClasses(recommendedClassesCopy)
    setUnit(unit - 3) // When passed unit count?
  });

  const flatStudentRecommendedClasses = () => {
    var tempConcatClasses = [];
      for(var requirements of Object.keys(props.suggestion)){
        tempConcatClasses = tempConcatClasses.concat(props.suggestion[requirements])
      }
       setRecommendedClasses(tempConcatClasses)
  }

  const [classSearch, setClassSearch] = useState('');

  const listItems = Object.keys(projectedClasses).map((name) => {
    return (
      <div className="course-container">
        <h4>{projectedClasses[name]}</h4>
        <div className="tooltip">
          <button className='csn-btn-icon'><FontAwesomeIcon icon="info" /></button>
          <button className='csn-btn-icon' onClick={() => removeClass(name)}><FontAwesomeIcon icon="minus" /></button>
        </div>
      </div>
    );
  });
  
  const recommendedItems = Object.keys(recommendedClasses).map((name) => {
    return (
      <div className="course-container">
          <h4>{recommendedClasses[name]}</h4>
          <div className="tooltip">
            <button className='csn-btn-icon' onClick={() => {addRecommended(name)}}><FontAwesomeIcon icon="plus"/></button>
          </div>
      </div>
    );
  });

  // const searchAddClass = ((e) => {  Prpduces a error
  //   let tempData = recommendedClasses;
  //   let index = tempData.index(l => l === e)
  //   setRecommendedClasses(index)
  // })

  useEffect(() =>{
    flatStudentRecommendedClasses();
  }, []);

  return (
    <div className="home-comp">
      <div className="scheduler-container">
        <center><h3>Next Semester</h3></center>
        <center><h4 className="scheduler-subtitle">Unfinalized List</h4></center>
        <center><h4 className ={(unit > 17) ? "scheduler-unit-red" : "scheduler-unit-grey"}> Unit: {unit}</h4></center>
        <hr />
          {listItems}
          <div className = "scheduler-center">
            {Object.keys(projectedClasses).length > 0 && <button className = "csn-btn"> Submit </button>}
          </div>
        <div >
          <center><input ref = {ref} type="text" className="csn-inp csn-expand light-tnt" onChange={(e) => setClassSearch(e.target.value)} placeholder="Add a class..." /></center>
        </div>
        <center><h4 className="scheduler-subtitle">Recommended Classes</h4></center>
        <hr />
        <div className="semester-container">
          {recommendedItems}
        </div>  
      </div>
    </div>
  )
}
