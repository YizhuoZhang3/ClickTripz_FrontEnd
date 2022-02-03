import React from "react";
import cx from "classnames";

 const Switch = ({rounded = true, isToggled, onToggle, name}) => {
  const slideCX = cx("slider", {
    rounded: rounded
  })

  return (
    <label className="switch">
      <input name={name} type="checkbox" checked={isToggled} onClick={onToggle}/>
      <span className={slideCX}/>
    </label>
  )
}

export default Switch;