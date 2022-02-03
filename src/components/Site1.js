import React from "react";
import SiteInfo from "./SiteInfo"

export default function Site1({ data, handleSubmit, onToggle, handleSite1InfoChange}){

  const site1Data = data.sites[0]
  const products = site1Data.activeProducts;
  console.log(products)
  return (
    <div className="right-section">

      <div className="heading-site1">
        <h2>Site1 ID:{site1Data.id}</h2>
      </div>
      <SiteInfo 
          siteData={site1Data} 
          products={products}
          handleChange={handleSite1InfoChange}
          handleSubmit={handleSubmit}
          onToggle={onToggle}
        />
    </div>
  )
}