import './DeptHome.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate'
import JSONdata from './MOCK_DATA.json'

export default function DeptHome() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        setCourses(JSONdata)
    }, [])

    const [pageNumber, setPageNumber] = useState(0)

    const numPerPage = 10
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
                {createTable()}
                <ReactPaginate
                    previousLabel={'< Previous'}
                    nextLabel={'Next >'}
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={changePage}
                    containerClassName={'paginationBtnsCont'}
                    pageLinkClassName={'paginationBtns'}
                    previousLinkClassName={'pnBtns'}
                    nextLinkClassName={'pnBtns'}
                    activeLinkClassName={'pagActive'}
                    breakLinkClassName={'dots'}
                />
                <button type="submit" className="csn-btn" onclick="myFunction()" >
                    <FontAwesomeIcon icon="redo" />
                    Generate Allocation</button>
                <button type="submit" className="csn-btn">
                    <FontAwesomeIcon icon="file-excel" />
                    Export to .xlsx</button>
            </div>
        </div>

    )
}
