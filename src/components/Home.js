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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const {name, location, organizationId, phoneNumber, bio} = allData;

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
        <form className="comp-form" onSubmit={handleSubmit} >
          <label htmlFor="name">Company Name
          <input type="text" name="name" value={name} onChange={handleChange} required/></label>
          
          <label htmlFor="location">Location
          <input type="text" name="location" value={location} onChange={handleChange} /></label>
   
          <label htmlFor="org-id">Organization ID
          <input type="text" name="organizationId" value={organizationId} onChange={handleChange} required/></label>

          <label htmlFor="phone">Phone
          <input type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange}/></label>
 
          <label id="bio" htmlFor="bio">Bio
          <input id="bio-input" type="text" name="bio" value={bio} onChange={handleChange}/></label>

        </form>
      </div>
      </div>
    </div>
  )
}