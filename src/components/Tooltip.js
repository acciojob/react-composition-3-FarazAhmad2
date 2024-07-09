import React from "react";
import { useState } from "react";
import "../styles/App.css";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  return (
    <div>
      <div
        className="tooltip"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {props.children}
        {isVisible && <div className="tooltiptext">{props.text}</div>}
      </div>
    </div>
  );
};

export default Tooltip;
