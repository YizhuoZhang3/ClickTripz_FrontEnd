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

        <form className="content">
          <label className="comp-info" id="company-name" for="name">
            Company Name
            <input type="text" id="name" value={data.name} required/>
          </label>
      
          <label className="comp-info" id="company-loca" for="location">
            Location
            <input type="text" id="location" value={"New York"}/>
          </label>
           
          <label className="comp-info" id="company-id" for="org-id">Organization ID
          <input type="text" id="org-id" value={data.organizationId}/>
          </label>
          
          <label className="comp-info" id="company-phone" for="phone">Phone
          <input type="tel" id="phone" value={"917-232-2323"}/>
          </label>
          
          <label className="comp-info" id="company-bio" for="bio">Bio
          <input type="text" id="bio" value={"ClickTripz is a travel technology company that builds innovative software solutions to serve the needs of suppliers, publishers, advertisers and travelers. From marketplaces that connect the industry through proprietary ad-serving technology, to cloud-based tools that help hoteliers put heads in beds-- ClickTripz has solutions that drive revenue atscale. Travelers benefit from the transparent and efficient pricing facilitated by the platform, while suppliers, publishers and advertisers all benefit from the enhanced ability to acquire and monetize qualified traffic using precise targeting and granular bidding. Founded in 2010 and with offices in California, Washington DC and London, the platform currently comprises thousands of active campaigns from worldwide partners, spanning 31 different languages and addressing tens of millions of travel queries per month."}/>
          </label>
          <button>SAVE</button>
        </form>
        
      </div>
    </div>
  )
}