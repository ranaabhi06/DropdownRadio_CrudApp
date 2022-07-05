import React, { useState } from "react";
import "./checkbox.css";
const CheckBox = (props) => {
  const [languageValue, setLanguageValue] = useState([]);
  const [vehicleValue, setVehicleValue] = useState([]);
 
 
  const checkboxLanguageValue = (event) => {
    if (event.target.checked) {
      let langArr = languageValue;
      langArr.push(event.target.value);
      setLanguageValue(langArr);
    //   console.log(languageValue);
    props.accepCheckboxData(finalCheckboxValue)
    }
  };
  const checkboxVehicleValue = (event) => {
    if (event.target.checked) {
      let vehiArr = vehicleValue;
      vehiArr.push(event.target.value);
      setVehicleValue(vehiArr);
    //   console.log(vehicleValue);
    props.accepCheckboxData(finalCheckboxValue)
    }
  };
  const finalCheckboxValue = {
    language: languageValue,
    vehicle: vehicleValue,
  };
//   console.log(finalCheckboxValue)

  return (
    <div>
      <form action="">
        <table>
          <tr>
            <td className="checkboxCss">
              <label htmlFor="">Intrested Language</label>
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                name=""
                value="React"
                onChange={(e) => {
                  checkboxLanguageValue(e);
                }}
                id=""
              />
              React
              <input
                type="checkbox"
                name=""
                value="Python"
                onChange={(e) => {
                  checkboxLanguageValue(e);
                }}
                id=""
              />
              Python
              <input
                type="checkbox"
                name=""
                value="Java"
                onChange={(e) => {
                  checkboxLanguageValue(e);
                }}
                id=""
              />
              Java
            </td>
          </tr>
          <tr>
            <td className="checkboxCss">
              <label htmlFor="">Have you vehicles</label>
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                name=""
                value="Bicycles"
                onChange={(e) => checkboxVehicleValue(e)}
                id=""
              />
              Bicycles
              <input
                type="checkbox"
                name=""
                value="Bike"
                onChange={(e) => checkboxVehicleValue(e)}
                id=""
              />
              Bike
              <input
                type="checkbox"
                name=""
                value="Car"
                onChange={(e) => checkboxVehicleValue(e)}
                id=""
              />
              Car
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default CheckBox;
