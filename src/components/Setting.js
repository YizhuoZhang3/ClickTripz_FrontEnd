import React from "react";
import Switch from "./Switch";
import { FcLock, FcStatistics, FcGlobe, FcMindMap} from "react-icons/fc";
import UploadFile from "./UploadFile";
import TimeZone from "./TimeZone";

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
                <div className="custom-dropdown small"><TimeZone /></div>
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
            <form id="slidecontainer">
              <label id="slider-label" htmlFor="publisherShare">Current revenue share</label>
              <div className="myRange">
              <input id="rangeInput" type="range" min="0.1" max="0.9" step="0.1" value={data.settings.revenue.publisherShare} name="publisherShare" onInput="outputId.value = rangeInput.value"/>
              <output name="outputName" id="outputId" htmlFor="rangeInput">{data.settings.revenue.publisherShare}</output>
              </div>
            </form>
          </div>

          <div>
            <h3>Document</h3>
            <div className="doc">
              <p>Default Terms</p>
              <Switch isToggled={data.settings.document.defaultTerms}/>
            </div>
            <UploadFile />
          </div>
        </div>
      </div>
    </div>
  )
}