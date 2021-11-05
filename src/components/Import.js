import './Import.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Import() {
    return (
        <div>
            <div className="importContainer">
                <div className='content-view'>
                    <h1>Import Degree Progress Report (DPR)</h1>
                    <div className="continueBtn">
                    <Link to={'submitted'}>
                        <button class="redBtn">Import File</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
