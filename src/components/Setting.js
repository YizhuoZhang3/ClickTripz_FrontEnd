import React from "react";

export default function Setting({data}){
  return (
    <div className="right-section">
      <div className="heading-setting">
        <h2>Setting</h2>
      </div>
      <div className="content">
        <div>
          <h2>General</h2>
          <ul>
            <li>Enabled</li>
            <li>Test Publisher</li>
            <li>Time Zone</li>
            <li>Account Type</li>
        </ul>
        </div>

        <div>
          <h2>Revenue</h2>
        </div>
        
        <div>
          <h2>Document</h2>
        </div>
      
        

      </div>
    </div>
  )
}