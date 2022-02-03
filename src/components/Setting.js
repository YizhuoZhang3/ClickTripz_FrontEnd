import React from "react";
import Switch from "./Switch";

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
            <div>
              <div>
                <p>Enabled</p>
                <Switch isToggled={data.settings.general.enabled}/>
              </div>
              
              <div>
                <p>Test Publisher</p>
                <Switch isToggled={data.settings.general.testPublisher}/>
              </div>

              <div>
                <p>Time Zone</p>
                <p>{data.settings.general.timezone}</p>
              </div>
              <div>
                <p>Account Type</p>
                <select>
                  <option value="CTZero">CTZero</option>
                  <option value="CTLite">CTLite</option>
                  <option value="CTPlus">CTPlus</option>
                  <option value="CTPro">CTPro</option>
                </select>
              </div>
          </div>
          </div>

          <div>
            <h3>Revenue</h3>
          </div>

          <div>
            <h3>Document</h3>
            <p>Default Terms</p>
          </div>
        </div>
      </div>
    </div>
  )
}