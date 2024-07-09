import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip tag="h2" text={'This is a tooltip'}>Hover over me</Tooltip>
      <Tooltip tag="p" text={'This is another tooltip'}>Hover over me to see another tooltip</Tooltip>
    </div>
  );
};

export default App;