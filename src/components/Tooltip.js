import React from "react";
import { useState } from "react";
import '../styles/App.css'

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {props.children}
      <p
        className="tooltiptext"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default Tooltip;