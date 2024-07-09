import React from "react";
import { useState } from "react";
import "../styles/App.css";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const Tag = props.tag || "div";

  return (
    <Tag
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {props.children}
      {isVisible && <span className="tooltiptext">{props.text}</span>}
    </Tag>
  );
};

export default Tooltip;
