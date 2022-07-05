import React, { useState } from "react";
import "./radio.css";
const Radio = (props) => {
  const [genderData, setGenderData] = useState('');
  const [personData, setPersonData] = useState([]);

  const finalGenderValue = {
    gender: genderData,
    person: personData,
  };
// console.log(finalGenderValue)
  const radioGenderValue = (event) => {
      props.accepRadioGenderData(event.target.value);
      setGenderData(event.target.value);
    };

  const radioPersonValue = (event) => {
      props.accepRadioPersonData(event.target.value)
      setPersonData(event.target.value);
  };
  return (
    <div>
      <table>
        <tr>
          <td className="radioCss">
            <label htmlFor="">Select Gender</label>
          </td>
          <td>
            <input
              type="radio"
              name="gender"
              id=""
              value="Male"
              onChange={(e) => {
                radioGenderValue(e);
              }}
            />
            Male
            <input
              type="radio"
              name="gender"
              id=""
              value="Female"
              onChange={(e) => {
                radioGenderValue(e);
              }}
            />
            Female
            <input
              type="radio"
              name="gender"
              id=""
              value="Other"
              onChange={(e) => {
                radioGenderValue(e);
              }}
            />
            Other
          </td>
        </tr>
        <tr>
          <td className="radioCss">
            <label htmlFor="">Are you Ex-Employee</label>
          </td>
          <td>
            <input
              type="radio"
              name="person"
              id=""
              value="Yes"
              onChange={(e) => {
                radioPersonValue(e);
              }}
            />
            Yes
            <input
              type="radio"
              name="person"
              id=""
              value="No"
              onChange={(e) => {
                radioPersonValue(e);
              }}
            />
            No
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Radio;
