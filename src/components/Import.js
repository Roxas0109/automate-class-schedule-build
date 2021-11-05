import React, { Component } from 'react'
import './Import.css'

export default class ImportComponent extends Component {
    render() {
      return (
          <div class="importWrapper">
              <div className="importContainer">
                    <h1>Import Degree Progress Report (DPR)</h1>
                    <div className="continueBtn">
                        <button class="redBtn">Import File</button>
                    </div>
              </div>
          </div>
      )
    }
}
