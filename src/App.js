import React from "react";
import CheckBox from "./Components/CheckBox/CheckBox";
import Dropdown from "./Components/Dropdown/Dropdown";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";

function App() {
  return (
    <div className="App">
      <Radio/>
      <CheckBox/>
     <Dropdown/>
    <Submit/>
    </div>
  );
}

export default App;
