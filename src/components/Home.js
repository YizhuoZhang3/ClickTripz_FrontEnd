import React from "react";
import data from "../data.json";
import { FaHome } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaConnectdevelop } from "react-icons/fa";
import { FaGg } from "react-icons/fa";

export default function Home(){
  console.log(data);

  return (
    <div className="home-container">
      <div className="left-section">
        <img id="ctzlogo" src="https://digitalknack.com/wp-content/themes/digitalknack/dk-images/cases/clicktripz/logo.png" alt="logo"/>
        <ul className="titles-list">
          <li><FaHome id="icon"/>Overview</li>
          <li><FiSettings id="icon"/>Setting</li>
          <li><FaConnectdevelop id="icon"/>Site1</li>
          <li><FaGg id="icon"/>Site2</li>
        </ul>
      </div>

      <div className="right-section">
        <div className="heading">
          <h2>Company Information</h2>
        </div>
        <div className="content">
          <h3 className="comp-info" id="company-name">Company Name</h3>
          <h3 className="comp-info" id="company-loca">Location</h3>
          <h3 className="comp-info" id="company-id">Organization ID</h3>
          <h3 className="comp-info" id="company-phone">Phone</h3>
          <h3 className="comp-info" id="company-bio">Bio</h3>
        </div>
      </div>
    </div>
  )
}