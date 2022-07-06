
import React, { useEffect, useState } from "react";

import Datepicker from "./Components/DatePicker/DatePicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";

import CheckBox from "./Components/CheckBox/CheckBox";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";
import Records from "./Components/Records/Records";

function App() {
  const[dropdownData,setDropdowndata]=useState([]);


  const [radioGenderFinal, setRadioGenderFinal] = useState([]);
  const [radioPersonFinal, setRadioPersonFinal] = useState([]);
  const [checkboxFinal, setCheckboxFinal] = useState([]);
  // console.log(radioGenderFinal)
  // console.log(radioPersonFinal)
  // console.log(checkboxFinal)

  const radioGenderValueAccept = (radioGenderData) => {
    setRadioGenderFinal(radioGenderData);
    
  };
   const radioPersonValueAccept = (radioPersonData) => {
    setRadioPersonFinal(radioPersonData);
    
  };
  const checkboxValueAccept = (checkboxData) => {
    setCheckboxFinal(checkboxData);
   
  };
  const ddToApp = (data) => {
    setDropdowndata(data);
    console.log(data);
  };

  // console.log(dropdownData);

  

  let [date, setDate] = useState([]);
  const dat = (dat) => {
    setDate(dat);
  };
  let [text, setText] = useState([]);
  const txt = (enteredText) => {
    setText(enteredText);
  };
  let data = [ date, text ,dropdownData,radioGenderFinal,radioPersonFinal,checkboxFinal];
  // console.log(data);

const[dataFormSubmit,setDataFromSubmit]=useState({})  
const acceptDataFromSub=(d)=>{
setDataFromSubmit(d)
console.log(dataFormSubmit)
}

//records



  return (
    <div className="App">
      <Textbox text={txt} />
      <Datepicker det={dat} />
      <Radio accepRadioGenderData={radioGenderValueAccept} accepRadioPersonData={radioPersonValueAccept} />
    
      <CheckBox accepCheckboxData={checkboxValueAccept} />
      <Dropdown setDdToApp={ddToApp} />
      <Submit values={data}  acceptDataFromSub={acceptDataFromSub}/>
      <Records value={data.id}/>
  
  
    </div>
  );
}

export default App;
