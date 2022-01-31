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
          <li><FaHome/>Overview</li>
          <li><FiSettings/>Setting</li>
          <li><FaConnectdevelop/>Site1</li>
          <li><FaGg/>Site2</li>
        </ul>
      </div>

      <div className="right-section">
        <div className="heading">
          <h2>Company Information</h2>
        </div>
        <div className="content">
          <h3>Company Name</h3>
          <h3>Location</h3>
          <h3>Organization ID</h3>
          <h3>Phone</h3>
          <h3>Bio</h3>
        </div>
        
      </div>
    </div>
  )
}