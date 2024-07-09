import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h2>
      <Tooltip text={'This is a tooltip'} children={'Hover over me'} />
      </h2>
        <Tooltip text={'This is another tooltip'} children={'Hover over me to see another tooltip'} />
    </div>
  );
};

export default App;