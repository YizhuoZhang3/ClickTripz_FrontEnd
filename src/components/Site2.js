import React from "react";
import SiteInfo from "./SiteInfo";

export default function Site2({data, handleChange, handleSubmit,isToggle, onToggle}){
  const siteData = data.sites[1]
  const products = siteData.activeProducts;
  console.log(products);

  return (
    <div className="right-section">
      <div className="heading-site2">
        <h2>Site2 ID:{siteData.id}</h2>
      </div>
        <SiteInfo 
          siteData={siteData} 
          products={products}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onToggle={onToggle}
        />
    </div>
  )
}