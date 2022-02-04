import React from "react";
import Switch from "./Switch";

export default function Product({product, onToggle, siteNum}){
  const devices = product.devices;
  // console.log("device: ", devices)
  return (
      <div className="product-wrap">
        <h4>{product.type}</h4>
        {
          devices.map(device => (
            <div className='device' key={device.type}>
              <p>{device.type}</p>
              <p>{device.enabled.toString()}</p>
              <Switch 
                isToggled={device.enabled}
                onToggle={onToggle}
                id={device.id}
                name="enabled"
              />
            </div>
          ))
        }
      </div>
  )
}