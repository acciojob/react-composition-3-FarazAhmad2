import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text={'This is a tooltip'} text2={'This is another tooltip'} />
    </div>
  );
};

export default App;