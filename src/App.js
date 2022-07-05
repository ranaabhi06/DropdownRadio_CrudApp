import React from "react";
import Datepicker from "./Components/DatePicker/Datepicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";
import Submit from "./Submit";

function App() {
  return (
    <div className="App">
    <Textbox/>
    <Datepicker/>
     <Dropdown/>
    <Submit/>
    </div>
  );
}

export default App;
