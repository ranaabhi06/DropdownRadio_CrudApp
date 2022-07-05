import React, { useState } from "react";
import Datepicker from "./Components/DatePicker/DatePicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";

import CheckBox from "./Components/CheckBox/CheckBox";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";

function App() {
  const[dropdownData,setDropdowndata]=useState([]);

  const ddToApp = (data) => {
    setDropdowndata(data);
    console.log(data);
  };

  // console.log(dropdownData);

  

  let [date, setDate] = useState("");
  const dat = (dat) => {
    setDate(dat);
  };
  let [text, setText] = useState("");
  const txt = (enteredText) => {
    setText(enteredText);
  };
  let data = { date, text ,dropdownData};
  // console.log(data);
  return (
    <div className="App">
      <Textbox text={txt} />
      <Datepicker det={dat} />
      <Radio />
      <CheckBox />
      <Dropdown setDdToApp={ddToApp} />
      <Submit values={data} />
    </div>
  );
}

export default App;
