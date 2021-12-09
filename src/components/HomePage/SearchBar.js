import React from 'react'
import { useState, useRef } from 'react'

export default function SearchBar({majorData, addRecommended}) {
    const [filterCourseObjects, setFilterCourseObjects] = useState([])
    const ref = useRef();

    const listSearchIteams = (target) => {

        var filterSearch = [];
    
        Object.keys(majorData).forEach(major => {
          majorData[major].courses.filter(course => {
            if (course.name.toLowerCase().includes(target.toLowerCase())) {
                filterSearch = [...filterSearch, course.name]
            }
          })
        })
        if (target == "")
          setFilterCourseObjects([])
        else
          setFilterCourseObjects(filterSearch);
      }

      const addCourseToProjected = (course) =>{
        addRecommended(3); // testing purpose.
        ref.current.value = ""
      }
    

    return(
        <div className="lol">
        <center><input ref = {ref} type="text" className="csn-inp csn-expand light-tnt" onChange={(e) => listSearchIteams(e.target.value)} placeholder="Add a class..." />
          <div className={(filterCourseObjects.length != 0) ? "csn-inp csn-expand light-tnt semester-courses-container" : ""}>
            {filterCourseObjects.length != 0 &&
              filterCourseObjects.slice(0, 3).map(course => {
                return (
                  <div onClick={() => addRecommended(3)}><h4>{course}</h4></div>// testint purpose
                )
              })}
          </div></center>
      </div>
    )
}
