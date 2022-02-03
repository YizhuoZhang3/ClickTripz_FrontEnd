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

  //toggle active products type button
  const handleProductToggle = (event) => {
    let key = 1;
    const {name, checked} = event.target;
    setData((prev) => ({
      ...prev,
      "sites": prev.sites.map((item) => ({
        ...item,
        "activeProducts": item.activeProducts.map((product) => ({
          ...product,
          "devices": product.devices.map((device) =>{
              return{
                ...device,
                [name]: checked
              }
          })
        })) 
      }
      ))
    }))
  }

  //this function for changing site information for site 1
  const handleSite1InfoChange = (event) => {
    let key = 0;
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      "sites": prevState.sites.map(eachItem =>(
        prevState.sites.indexOf(eachItem) === key ? 
        {...eachItem, [name]: value}: eachItem
    ))}))
  }

  //this function for changing site information for site 2
  const handleSite2InfoChange = (event) => {
    let key = 1;
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      "sites": prevState.sites.map(eachItem =>(
        prevState.sites.indexOf(eachItem) === key ? 
        {...eachItem, [name]: value}: eachItem
    ))}))
  }

  //this function for changing settings->general->enabled and test publisher
  const handleChangeSetting = (event) => {
    const {name, checked} = event.target;
    setData((prev) => ({
      ...prev,
      settings: {...prev.settings, general:{
        ...prev.settings.general,
        [name]: checked
      }}
    }))
  }

  //this function for changing setting timezone and account type
  const handleChangeAccountType = (eve) => {
    const {name, value} = eve.target;
    setData((prev) => ({
      ...prev,
      settings: {...prev.settings, general:{
        ...prev.settings.general,
        [name]: value
      }}
    }))
  }

  //this function for change revenue share
  const handleChangeRevenue = (eve) => {
    const {value} = eve.target;
    setData((prev) => ({
      ...prev,
      settings: {...prev.settings, revenue:{
        ...prev.settings.revenue,
        "publisherShare": value
      }}
    }))
  }

  //this fucntion for change document default terms
  const handleChangeTerm = (eve) => {
    const {checked} = eve.target;
    setData((prev) => ({
      ...prev,
      settings: {...prev.settings, document:{
        ...prev.settings.document,
        "defaultTerms": checked
      }}
    }))
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
          <CompanyInfo 
            allData={allData} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
          />
        </TabPanel>
        <TabPanel>
          <Setting 
            data={allData}
            handleChangeSetting={handleChangeSetting}
            handleChangeAccountType={handleChangeAccountType}
            handleChangeRevenue={handleChangeRevenue}
            handleChangeTerm={handleChangeTerm}
            />
        </TabPanel>
        <TabPanel>
          <Site1 
            data={allData} 
            handleSubmit={handleSubmit}
            handleSite1InfoChange={handleSite1InfoChange} 
            onToggle={handleProductToggle}
          />
        </TabPanel>
        <TabPanel>
          <Site2 
            data={allData} 
            handleSubmit={handleSubmit} 
            handleSite2InfoChange={handleSite2InfoChange}
            onToggle={handleProductToggle}
          />
        </TabPanel>

      </Tabs>
    </div>
  )
}