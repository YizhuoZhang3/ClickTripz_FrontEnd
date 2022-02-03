import React from "react";
import Switch from "./Switch";
import { FcLock, FcStatistics, FcGlobe, FcMindMap} from "react-icons/fc";

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
              <div className="general">
                <p><FcLock id="setting-icon"/>Enabled</p>
                <Switch isToggled={data.settings.general.enabled}/>
              </div>
              
              <div className="general">
                <p><FcStatistics id="setting-icon"/>Test Publisher</p>
                <Switch isToggled={data.settings.general.testPublisher}/>
              </div>

              <div className="general">
                <p><FcGlobe id="setting-icon"/>Time Zone</p>
                <p id="switch-btn">{data.settings.general.timezone}</p>
              </div>
              <div className="general">
                <p><FcMindMap id="setting-icon"/>Account Type</p>
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