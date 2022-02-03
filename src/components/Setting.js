import React from "react";
import Switch from "./Switch";
import { FcLock, FcStatistics, FcGlobe, FcMindMap} from "react-icons/fc";
import UploadFile from "./UploadFile";

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
              <div className="general ">
                <p><FcMindMap id="setting-icon"/>Account Type</p>
                <div className="custom-dropdown small">
                <select>
                  <option value="CTZero">CTZero</option>
                  <option value="CTLite">CTLite</option>
                  <option value="CTPlus">CTPlus</option>
                  <option value="CTPro">CTPro</option>
                </select>
                </div>
              </div>
          </div>
          </div>

          <div>
            <h3>Revenue</h3>
            <form class="slidecontainer">
              <label id="slider-label" for="publisherShare">Current revenue share</label>
              <div className="myRange">
              <input id="rangeInput" type="range" min="0.1" max="0.9" step="0.1" value={data.settings.revenue.publisherShare} name="publisherShare" oninput="outputId.value = rangeInput.value"/>
              <output name="outputName" id="outputId" for="rangeInput">{data.settings.revenue.publisherShare}</output>
              </div>
            </form>
          </div>

          <div>
            <h3>Document</h3>
            <p>Default Terms</p>
            <UploadFile/>
          </div>
        </div>
      </div>
    </div>
  )
}