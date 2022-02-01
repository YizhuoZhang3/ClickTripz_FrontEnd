import React, { useState, useEffect } from "react";
import data from "../data.json";
import { FaHome } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaConnectdevelop } from "react-icons/fa";
import { FaGg } from "react-icons/fa";

export default function Home(){
  const [allData, setData] = useState(data);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      phoneNumber: '917-232-2323',
      bio: 'ClickTripz is a travel technology company that builds innovative software solutions to serve the needs of suppliers, publishers, advertisers and travelers. From marketplaces that connect the industry through proprietary ad-serving technology, to cloud-based tools that help hoteliers put heads in beds-- ClickTripz has solutions that drive revenue atscale. Travelers benefit from the transparent and efficient pricing facilitated by the platform, while suppliers, publishers and advertisers all benefit from the enhanced ability to acquire and monetize qualified traffic using precise targeting and granular bidding. Founded in 2010 and with offices in California, Washington DC and London, the platform currently comprises thousands of active campaigns from worldwide partners, spanning 31 different languages and addressing tens of millions of travel queries per month.',
      location: 'New York'
    }))
   }, []);
  
  
  console.log(allData);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

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
        <form className="comp-form" onChange={handleSubmit} >
          <label htmlFor="name">Company Name
          <input type="text" id="name" value={allData.name || ''} onChange={e=>setData(e.target.value)}/></label>
          
          <label htmlFor="location">Location
          <input type="text" id="location" value={allData.location || ''} onChange={e=>setData(e.target.value)}/></label>
   
          <label htmlFor="org-id">Organization ID
          <input type="text" id="org-id" value={allData.organizationId || ''} onChange={e=>setData(e.target.value)}/></label>

          <label htmlFor="phone">Phone
          <input type="tel" id="phone" value={allData.phoneNumber || ''} onChange={e=>setData(e.target.value)}/></label>
 
          <label htmlFor="bio">Bio
          <input type="text" id="bio" value={allData.bio || ''} onChange={e=>setData(e.target.value)}/></label>

          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    </div>
  )
}