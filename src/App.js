import React, { useEffect, useState } from "react";

import Datepicker from "./Components/DatePicker/DatePicker";
import Dropdown from "./Components/Dropdown/Dropdown";
import Textbox from "./Components/Textbox/Textbox";
import CheckBox from "./Components/CheckBox/CheckBox";
import Radio from "./Components/Radio/Radio";
import Submit from "./Components/Submit";
import Records from "./Components/Records/Records";
import axios from 'axios'

function App() {
  const [dropdownData, setDropdowndata] = useState({});
  const [radioGenderFinal, setRadioGenderFinal] = useState({});
  const [radioPersonFinal, setRadioPersonFinal] = useState({});
  const [checkboxFinal, setCheckboxFinal] = useState({});
  const [date, setDate] = useState({});
  const [text, setText] = useState({});
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

  
  const dat = (dat) => {
    setDate(dat);
  };
 
  const txt = (enteredText) => {
    setText(enteredText);
  };
  let data = [
    date,
    text,
    dropdownData,
    radioGenderFinal,
    radioPersonFinal,
    checkboxFinal,
    
  ];
  // console.log(data);

  const [dataFormSubmit, setDataFromSubmit] = useState([]);
  const acceptDataFromSub = (d) => {
    setDataFromSubmit(d);
    console.log(dataFormSubmit);
  };
  const[jsonGet,setJsonGet]=useState([])
  useEffect(()=>{
    getToDb();
  },[])
const getToDb=()=>{
  axios.get("http://localhost:5003/data").then((res)=>{
    setJsonGet(res.data)
  })
  
}

  return (
    <div className="App">
      < Textbox text={txt} />
      <Datepicker det={dat} />
      <Radio
        accepRadioGenderData={radioGenderValueAccept}
        accepRadioPersonData={radioPersonValueAccept}
      />
      <CheckBox accepCheckboxData={checkboxValueAccept} />
      <Dropdown setDdToApp={ddToApp} />
      <Submit values={data}  refresh={getToDb} />
      {/* acceptDataFromSub={acceptDataFromSub} */}
      <Records value={dataFormSubmit} acceptData={jsonGet} refresh={getToDb}></Records>
    </div>
  );
}

export default App;
