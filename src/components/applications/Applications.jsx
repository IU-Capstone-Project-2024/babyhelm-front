import React from 'react'
import './applications.css'
const Applications = () => {
    return (
        <div className="applications">
          <div className="application-name">
            <div className="select-wrapper">
              <select id="application-name">
                <option value="app1">App 1</option>
                <option value="app2">App 2</option>
              </select>
            </div>
            <div className='line'/>
          </div>
            <div className='application-info'>
              <label htmlFor="product-link">Link to your product:</label>
              <p>some text</p>
              <label htmlFor="dashboard-link">Link to your monitoring dashboard:</label>
              <p>some text</p>
              <button className="open-button">Open</button>
            </div>
        </div>
      );
}

export default Applications