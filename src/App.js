import React, { useEffect, useState } from "react";
import Datepicker from "./Components/DatePicker/DatePicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";

import CheckBox from "./Components/CheckBox/CheckBox";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";

function App() {
  const [radioGenderFinal, setRadioGenderFinal] = useState({});
  const [radioPersonFinal, setRadioPersonFinal] = useState({});
  const [checkboxFinal, setCheckboxFinal] = useState({});

  const radioGenderValueAccept = (radioGenderData) => {
    setRadioGenderFinal(radioGenderData);
    
  };
   const radioPersonValueAccept = (radioPersonData) => {
    setRadioPersonFinal(radioPersonData);
    
  };
  const checkboxValueAccept = (checkboxData) => {
    setCheckboxFinal(checkboxData);
   
  };

  return (
    <div className="App">
      <Textbox />
      <Datepicker />
      <Radio accepRadioGenderData={radioGenderValueAccept} accepRadioPersonData={radioPersonValueAccept} />
    
      <CheckBox accepCheckboxData={checkboxValueAccept} />
      <Dropdown />
      <Submit radioG={radioGenderFinal} radioP={radioPersonFinal} checkboxD={checkboxFinal} />
    </div>
  );
}

export default App;
