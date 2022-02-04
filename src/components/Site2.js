import React from "react";
import SiteInfo from "./SiteInfo";

export default function Site2({data, handleSubmit, onToggle, handleSite2InfoChange}){
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
          handleChange={handleSite2InfoChange}
          handleSubmit={handleSubmit}
          onToggle={onToggle}
          siteNum={2}
        />
    </div>
  )
}