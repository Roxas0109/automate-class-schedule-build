import './DeptHome.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DeptHome() {
    
function myFunction(){
        
    const tableDiv = document.querySelector("div.allocationsTable") // Find the tableContainer div in our html
    let tableHeaders = ["Class Name", "Allocation"]
    
    const createTable = () => {
        while (tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild) // Remove all childrem from table div (if any)
    
        let theTable = document.createElement('table') // Creeate the table itself
        theTable.className = 'theTable'
    
        let theTableHead = document.createElement('thead') // Creates the table header group element
        theTableHead.className = 'theTableHead'
    
        let theTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
        theTableHeaderRow.className = 'theTableHeaderRow'
    
        // Will iterate over all string in the tableHeader array and will append the header cells to the table header row
        tableHeaders.forEach(header => {
            let tableHeader = document.createElement('th') // Creates the current header cell during a specific iteration
            tableHeader.innerText = header
            theTableHeaderRow.append(tableHeader) // Appends the curent header cell to the header row
        })
    
        theTableHead.append(theTableHeaderRow) // Appends the header row to the table header group element
        theTable.append(theTableHead)
    
        let theTableBody = document.createElement('tbody') // Creates the table body group element
        theTableBody.className = "theTable-Body"
        theTable.append(theTableBody) // Appends the table body group element to the table
    
        tableDiv.append(theTable) // Appends the table to the table div
    }
    
    // The function below will accept a single course and its index to add to table
    const appendCourses = (singleCourse, singleCourseIndex) => {
        const theTable = document.querySelector('.theTable') // Find the table we created
    
        let theTableBodyRow = document.createElement('tr') // Create the current table row
        theTableBodyRow.className = 'theTableBodyRow'
    
        //next lines create 2 column cells that will append to the current table row
        let theCourses = document.createElement('td')
        theCourses.innerText = singleCourse.course
    
        let theAllocations = document.createElement('td')
        theAllocations.innerText = singleCourse.allocations
    
        theTableBodyRow.append(theCourses, theAllocations) // Append the 2 cells to the table row
    
    }
        const getCourses = () => {
            fetch('theData.txt') // Fetch for all courses. The response is an array of object that is sorted in decreasing order
            .then(res => res.json())
            .then(courses => {
                createTable() // Clears tableContainer div if it has any children nodes, creates & appends the table
        
                // Iterates through all the object in the courses array and appends each one to the table body
                for (const course of courses) {
                    let courseIndex = courses.indexOf(course) + 1 // Index of course in course array for table (these are already sorted in the backend)
                    appendCourses(course, courseIndex) // Creates and appends each row to the table body
                }
            })
        }
    
    }
    

    return (
   

        <div className = "tableContainer">
            <div className = "wrapper">  
            <div className = "allocationsTable"></div>

                <button type="submit" className="csn-btn" onclick="myFunction()" >
                    <FontAwesomeIcon icon="redo" />
                    Generate Allocation</button>
                    <div class="divider"/>
                <button type="submit" className="csn-btn">
                    <FontAwesomeIcon icon="file-excel" />
                    Export to .xlsx</button>
                </div>
            </div>
        
    )
}
