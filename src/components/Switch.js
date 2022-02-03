import React from "react";
import cx from "classnames";

 const Switch = ({rounded = true, isToggled, onToggle}) => {
  const slideCX = cx("slider", {
    rounded: rounded
  })

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle}/>
      <span className={slideCX}/>
    </label>
  )
}

export default Switch;