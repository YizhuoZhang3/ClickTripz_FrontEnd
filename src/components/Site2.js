import React from "react";
import SiteInfo from "./SiteInfo";

export default function Site2({setData, data, handleSubmit, onToggle}){
  const siteData = data.sites[1]
  const products = siteData.activeProducts;
  console.log(products);

  const handleSiteChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      "sites": prevState.sites.map((eachItem, idx) =>{
        console.log("this is eachItem: ", eachItem, idx)
        return{
          ...eachItem,
          [name]: value
        }
      })
    }))}

  return (
    <div className="right-section">
      <div className="heading-site2">
        <h2>Site2 ID:{siteData.id}</h2>
      </div>
        <SiteInfo 
          siteData={siteData} 
          products={products}
          handleChange={handleSiteChange}
          handleSubmit={handleSubmit}
          onToggle={onToggle}
        />
    </div>
  )
}