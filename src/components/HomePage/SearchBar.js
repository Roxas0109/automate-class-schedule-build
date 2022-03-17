import React from 'react'
import { useState, useRef } from 'react'

export default function SearchBar({ majorData, addClass }) {
    const [filterCourseObjects, setFilterCourseObjects] = useState([])
    const ref = useRef();

    const generalEd = ["General ED (Unit 3)"]

    const listSearchIteams = (target) => {

        var filterSearch = [];

        Object.keys(majorData).forEach(major => {
            majorData[major].courses.filter(course => {
                if (course.name.toLowerCase().includes(target.toLowerCase())) {
                    filterSearch = [...filterSearch, course.name]
                }
            })
        })
        
        filterSearch.push(generalEd[0])
        

        if (target == "")
            setFilterCourseObjects([])
        else
            setFilterCourseObjects(filterSearch);
    }

    const addCourseToProjected = (course) => {
        addClass(course); // testing purpose.
        ref.current.value = "";
        setFilterCourseObjects([]);
    }


    return (
        <div className="lol">
            <center>
                <div className="csn-search-area">
                    <input ref={ref} type="text" className="csn-inp csn-expand light-tnt" onChange={(e) => listSearchIteams(e.target.value)} placeholder="Add a class..." />
                    <div className={(filterCourseObjects.length != 0) ? "search-courses-container" : ""}>
                        {filterCourseObjects.length != 0 &&
                            filterCourseObjects.slice(0, 3).map(course => {
                                return (
                                    <div onClick={() => addCourseToProjected(course)}><h4>{course}</h4></div>// testint purpose
                                )
                            })}
                    </div>
                </div>
            </center>
        </div>
    )
}
