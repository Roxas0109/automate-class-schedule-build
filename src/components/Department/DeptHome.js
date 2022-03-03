import './DeptHome.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate'

export default function DeptHome() {
    const JSONTest = [{ class: "COMP1", allocation: "357" }, { class: "COMP2", allocation: "357" },
    { class: "COMP3", allocation: "357" }, { class: "COMP4", allocation: "357" }, { class: "COMP5", allocation: "357" },
    { class: "COMP6", allocation: "357" }, { class: "COMP7", allocation: "357" }]

    const [courses, setCourses] = useState([])

    useEffect(() => {
        setCourses(JSONTest)
    }, [])

    const [pageNumber, setPageNumber] = useState(0)

    const numPerPage = 2
    const pagesVisited = pageNumber * numPerPage

    const pageCount = Math.ceil(courses.length / numPerPage)

    const displayCourses = courses
        .slice(pagesVisited, pagesVisited + numPerPage)
        .map((item) => {
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
        })

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    
    function createTable() {
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
                        {displayCourses}
                    </tbody>
                </table>
            </>)
    }


    return (


        <div className="tableContainer">
            <div className="wrapper">
                <div className="allocationsTable"></div>
                {createTable()}
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBtns'}
                    previousClassName={'prevBtn'}
                    nextLinkClassName={'nextBtn'}
                    disabledClassName={'pagDisabled'}
                    activeClassName={'pagActive'}
                />
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
