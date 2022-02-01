import React from "react";
import Product from "./Product";
import SiteInfo from "./SiteInfo"

export default function Site1({data, handleChange, handleSubmit}){
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
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
    </div>
  )
}