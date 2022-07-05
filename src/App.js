import React, { useState } from "react";
import Datepicker from "./Components/DatePicker/DatePicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";

import CheckBox from "./Components/CheckBox/CheckBox";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";




function App() {
 
 const ddToApp=(data)=>{
console.log(data)
 }

console.log(ddToApp);
const setddToSubmit=()=>{
  ddToApp();
}
console.log(setddToSubmit)



  return (
    <div className="App">
      <Textbox />
      <Datepicker />
      <Radio />
      <CheckBox />
      <Dropdown setDdToApp={ddToApp} />



      <Submit  setddToSubmit={setddToSubmit}/>
    </div>
  );
}

export default App;
