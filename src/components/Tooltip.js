import React from "react";
import { useState } from "react";
import "../styles/App.css";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const Tag = props.tag || "div";

  return (
    <Tag className="tooltip">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {props.children}
        {isVisible && <div className="tooltiptext">{props.text}</div>}
      </div>
    </Tag>
  );
};

export default Tooltip;
