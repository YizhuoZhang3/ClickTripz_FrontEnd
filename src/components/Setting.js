import React from "react";

export default function Setting({data}){
  return (
    <div className="right-section">
      <div className="heading-setting">
        <h2>Setting</h2>
      </div>
      <div className="content">
        <div className="setting">
          <div>
            <h3>General</h3>
            <ul>
              <li>Enabled</li>
              <li>Test Publisher</li>
              <li>Time Zone</li>
              <li>Account Type</li>
          </ul>
          </div>

          <div>
            <h3>Revenue</h3>
          </div>

          <div>
            <h3>Document</h3>
          </div>
        </div>
      </div>
    </div>
  )
}