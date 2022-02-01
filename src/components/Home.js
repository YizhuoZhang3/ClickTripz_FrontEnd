import React, { useState, useEffect } from "react";
import data from "../data.json";
import { FaHome } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaConnectdevelop } from "react-icons/fa";
import { FaGg } from "react-icons/fa";
import CompanyInfo from "./CompanyInfo";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Setting from "./Setting";
import Site1 from "./Site1";
import Site2 from "./Site2";

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

  return (
    <div className="home-container">
      <Tabs>
        <TabList>
        <img id="ctzlogo" src="https://digitalknack.com/wp-content/themes/digitalknack/dk-images/cases/clicktripz/logo.png" alt="logo"/>
          <Tab>
            <p><FaHome id="icon"/>Overview</p>
          </Tab>
          <Tab>
            <p><FiSettings id="icon"/>Setting</p>
          </Tab>
          <Tab>
            <p><FaConnectdevelop id="icon"/>Site1</p>
          </Tab>
          <Tab>
            <p><FaGg id="icon"/>Site2</p>
          </Tab>
        </TabList>
      

        <TabPanel>
          <CompanyInfo allData={allData} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </TabPanel>
        <TabPanel>
          <Setting data={allData}/>
        </TabPanel>
        <TabPanel>
          <Site1 data={allData}/>
        </TabPanel>
        <TabPanel>
          <Site2 data={allData}/>
        </TabPanel>

      </Tabs>
    </div>
  )
}