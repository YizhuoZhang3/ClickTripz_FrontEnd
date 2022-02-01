import React from "react";

export default function Product({product}){
  const devices = product.devices;
  console.log("device: ",devices)

  return (
      <div className="site1-products">
        <h4>{product.type}</h4>
        {
          devices.map(device => (
            <div className='device' key={device.type}>
              <p>{device.type}</p>
              <p>{device.enabled}</p>
            </div>
          ))
        }
      </div>
  )
}