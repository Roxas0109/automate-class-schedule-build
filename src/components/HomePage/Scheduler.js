import React, { useState, useCallback, useEffect, useRef } from 'react';
import './Scheduler.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { setPop } from '../../features/popup/PopupSlice'

export default function Scheduler(props) {
  const dispatch = useDispatch()

  const [projectedClasses, setProjectedClasses] = useState([]);

  const [recommendedClasses, setRecommendedClasses] = useState([]);

  const [unit, setUnit] = useState(0);

  const getMajorAberrations = (getSpeficCourseAberrations) => {
    for (var l in props.suggestion.majorData) {
      if (getSpeficCourseAberrations == props.suggestion.majorData[l].aberrations)
        return props.suggestion.majorData[l].name;
    }
  }

  const getSpeficCourse = (adding) => {
    const majorData = props.suggestion.majorData;

    const getSpeficCourseAberrations = getMajorAberrations(adding.split(' ')[0]); // get Aberrations of the spefic major.

    const addingCouseUnits = majorData[getSpeficCourseAberrations].courses.filter(course => (course.name == adding));

    return addingCouseUnits[0];
  }

  const addRecommended = useCallback((toAdd) => {
    console.log("Moving " + toAdd);
    var recommendedClassesCopy = { ...recommendedClasses };
    var adding = recommendedClasses[toAdd];
    delete recommendedClassesCopy[toAdd];
    setRecommendedClasses(recommendedClassesCopy);
    var projectedClassesCopy = { ...projectedClasses };
    projectedClassesCopy[toAdd] = adding;
    setProjectedClasses(projectedClassesCopy);
    console.log(getSpeficCourse(adding).units);
    setUnit(unit + getSpeficCourse(adding).units);
  });

  const [tempHoldOfRequirementsCourses, setTempHoldOfRequirementsCourses] = useState([])

  const removeClass = useCallback((toRemove) => {
    console.log("Removing" + toRemove);
    let projectedClassesCopy = { ...projectedClasses };
    let moveToRecommendedClasses = projectedClasses[toRemove]
    delete projectedClassesCopy[toRemove];
    setProjectedClasses(projectedClassesCopy)

    if(moveToRecommendedClasses = "General ED (Unit 3)"){
      setUnit(unit - 3);
      return;
    }
    else{
      setUnit(unit - getSpeficCourse(moveToRecommendedClasses).units);
    }

    if (tempHoldOfRequirementsCourses.indexOf(moveToRecommendedClasses) == -1)
      return;

    var recommendedClassesCopy = { ...recommendedClasses };
    recommendedClassesCopy[toRemove] = moveToRecommendedClasses;
    setRecommendedClasses(recommendedClassesCopy)
  });

  const flatStudentRecommendedClasses = () => {
    var tempConcatClasses = [];
    for (var requirements of Object.keys(props.suggestion.remainingRequirements)) {
      tempConcatClasses = tempConcatClasses.concat(props.suggestion.remainingRequirements[requirements])
    }
    setRecommendedClasses(tempConcatClasses);
    setTempHoldOfRequirementsCourses(tempConcatClasses);
  }

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
          <button className='csn-btn-icon' onClick={() => { addRecommended(name) }}><FontAwesomeIcon icon="plus" /></button>
        </div>
      </div>
    );
  });

  const addClass = ((courseName) => {
    var ifCourseInRecommendedClasses = -1
    for (const [key, value] of Object.entries(recommendedClasses)) {
      if (value == courseName) {
        ifCourseInRecommendedClasses = key;
        break;
      }
    }

    if (ifCourseInRecommendedClasses != -1) {
      addRecommended(ifCourseInRecommendedClasses)
    } else {
      var projectedClassesCopy = { ...projectedClasses };
      console.log(Object.keys(projectedClassesCopy).length);
      projectedClassesCopy[Object.keys(projectedClassesCopy).length] = courseName
      setProjectedClasses(projectedClassesCopy)

      if (courseName == "General ED (Unit 3)") {
        setUnit(unit + 3)
      }
      else {
        setUnit(unit + getSpeficCourse(courseName).units)
      }
    }
  });

  useEffect(() => {
    flatStudentRecommendedClasses();
  }, []);

  return (
    <div className="home-comp">
      <div className="scheduler-container">
        <center><h3>Next Semester</h3></center>
        <center><h4 className="scheduler-subtitle">Unfinalized List</h4></center>
        <center><h4 className={(unit >= 17) ? "scheduler-unit-red" : "scheduler-unit-grey"}> Unit: {unit}</h4></center>
        <hr />
        {listItems}
        <div className="scheduler-center">
          {Object.keys(projectedClasses).length > 0 && <button className="csn-btn" onClick={props.toggleConfirm}> Submit </button>}
        </div>
        <SearchBar majorData={props.suggestion.majorData} addClass={addClass} />
        <center><h4 className="scheduler-subtitle">Recommended Classes</h4></center>
        <hr />
        <div className="rec-container">
          {recommendedItems}
        </div>
      </div>
    </div>
  )
}
