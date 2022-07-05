import React from "react";
import Datepicker from "./Components/DatePicker/Datepicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";
import Submit from "./Submit";
import CheckBox from "./Components/CheckBox/CheckBox";
import Dropdown from "./Components/Dropdown/Dropdown";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";

function App() {
  return (
    <div className="App">
    <Textbox/>
    <Datepicker/>
      <Radio/>
      <CheckBox/>
     <Dropdown/>
    <Submit/>
    </div>
  );
}

export default App;
