import React from "react";

export default function CompanyInfo({allData, handleSubmit, handleChange}){
  const {name, location, organizationId, phoneNumber, bio} = allData;

  return(
    <div className="right-section">
      <div className="heading">
        <h2>Company Information</h2>
      </div>

      <div className="content">
        <form className="comp-form" onSubmit={handleSubmit} >
          <label htmlFor="name">COMPANY NAME
          <input id="company-input" type="text" name="name" value={name} onChange={handleChange} required/></label>
          
          <label htmlFor="location">LOCATION
          <input id="company-input" type="text" name="location" value={location} onChange={handleChange} /></label>
   
          <label htmlFor="org-id">ORGANIZATION ID
          <input id="company-input" type="text" name="organizationId" value={organizationId} onChange={handleChange} required/></label>

          <label htmlFor="phone">PHONE
          <input id="company-input" type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange}/></label>
 
          <label id="bio" htmlFor="bio">BIO
          <textarea type="text" name="bio" value={bio} onChange={handleChange}/></label>

        </form>
      </div>
    </div>
  )
}