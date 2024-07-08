import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text={'This is a tooltip'}>
        <h1>Hover over me</h1>
      </Tooltip>
      <Tooltip text={'This is another tooltip'}>
        <p>Hover on me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;