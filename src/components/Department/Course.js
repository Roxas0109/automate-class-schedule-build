import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Course() {

  const { courseName } = useParams();
  const [data, setData] = useState(null);


  const fetchCourseData = async () => {
      const options = {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              "authorization": localStorage.getItem("token")
          }
      }
      const courseFetch = await fetch(`http://localhost:80/api/project/course/${courseName}`, options)
      const courseData = await courseFetch.json()

      if (courseData.status == "success") {
          console.log(courseData.data);
          setData(courseData.data)
      } else {
          alert("NOT WOKRING (CHANGE LATER)")
      }
  }

  useEffect(() => {
      fetchCourseData();
  }, []);

  return (
    <div>Course {courseName}</div>
  )
}
