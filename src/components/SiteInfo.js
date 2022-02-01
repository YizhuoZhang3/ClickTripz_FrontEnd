import react from "react";
import Product from "./Product";

export default function SiteInfo({siteData, products, handleSubmit, handleChange}){
  return (
    <div className="content">
        <div className="site1">
          <div className="top-sec">
            <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">DISPLAY NAME
            <input type="text" name="displayName" value={siteData.displayName} onChange={handleChange} required/></label>

            <label htmlFor="scriptDelay">SCRIPT DELAY
            <input type="text" name="scriptDelay" value={siteData.scriptDelay} onChange={handleChange} required/></label>

            <label htmlFor="domain">DOMAIN
            <input type="text" name="domain" value={siteData.domain} onChange={handleChange} required/></label>

            <label htmlFor="enabled">ENABLED
            <input type="text" name="enabled" value={siteData.enabled} onChange={handleChange} required/></label>
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
  )
}