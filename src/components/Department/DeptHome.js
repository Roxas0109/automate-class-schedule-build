import './DeptHome.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DeptHome() {

    const JSONTest = [{ class: "COMP222", allocation: "357" },{ class: "COMP222", allocation: "357" },
    { class: "COMP222", allocation: "357" },{ class: "COMP222", allocation: "357" }, { class: "COMP222", allocation: "357" },
    { class: "COMP222", allocation: "357" }]

    function displayCourses() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Class
                            </th>
                            <th>
                                Allocation
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSONTest.map(item => {
                            return (
                                <tr>
                                    <td>
                                        {item.class}
                                    </td>
                                    <td>
                                        {item.allocation}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>)
    }



    return (


        <div className="tableContainer">
            <div className="wrapper">
                <div className="allocationsTable"></div>
                {displayCourses()}
                <button type="submit" className="csn-btn" onclick="myFunction()" >
                    <FontAwesomeIcon icon="redo" />
                    Generate Allocation</button>
                <div class="divider" />
                <button type="submit" className="csn-btn">
                    <FontAwesomeIcon icon="file-excel" />
                    Export to .xlsx</button>
            </div>
        </div>

    )
}
