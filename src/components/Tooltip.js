import React from "react";
import { useState } from "react";
import "../styles/App.css";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [Visible, setVisible] = useState(false);

  return (
    <div className="tooltip">
      
      <h2 className="tooltiptext" style={{ visibility: isVisible ? "visible" : "hidden" }}>{props.text}</h2>
      <h1
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        Hover over me
      </h1>
      <p
        className="tooltiptext"
        style={{ visibility: Visible ? "visible" : "hidden" }}
      >
        {props.text2}
      </p>
      <p
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover over me to see another tooltip
      </p>
    </div>
  );
};

export default Tooltip;
