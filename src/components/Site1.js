import React from "react";
import Product from "./Product";

export default function Site1({data, handleChange, handleSubmit}){
  const site1Data = data.sites[0]
  const products = site1Data.activeProducts;
  console.log(products)

  return (
    <div className="right-section">

      <div className="heading-site1">
        <h2>Site1 ID:{site1Data.id}</h2>
      </div>

      <div className="content">
        <div className="site1">
          <div className="top-sec">
            <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">DISPLAY NAME
            <input type="text" name="displayName" value={site1Data.displayName} onChange={handleChange} required/></label>

            <label htmlFor="scriptDelay">SCRIPT DELAY
            <input type="text" name="scriptDelay" value={site1Data.scriptDelay} onChange={handleChange} required/></label>

            <label htmlFor="domain">DOMAIN
            <input type="text" name="domain" value={site1Data.domain} onChange={handleChange} required/></label>

            <label htmlFor="enabled">ENABLED
            <input type="text" name="enabled" value={site1Data.enabled} onChange={handleChange} required/></label>
            </form>
          </div>

          <div className="bottom-sec">
            <h3>Active Products</h3>
            <div className="site1-products">
            {
              products.map(product => (
                <Product product={product} key={product.type}/>
              ))
            }
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}