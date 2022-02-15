import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DeptHome() {
    return (
        <div>
            <h1>Current Class Allocations</h1>
            <h3>Last updated: </h3>
            <table>
                <tr>
                    <th>Class Name</th>
                    <th>Allocation</th>
                </tr>
                <tr>
                    <td>COMP 222</td>
                    <td>150</td>
                </tr>
            </table>
            <button type="submit" className="csn-btn">
                <FontAwesomeIcon icon="redo" />
                Generate Allocation</button>
            <button type="submit" className="csn-btn">
                <FontAwesomeIcon icon="file-excel" />
                Export to .xlsx</button>
        </div>
    )
}
