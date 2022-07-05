import React,{useState,Fragment,useEffect} from "react";
import Department from "../Department.json";
import Designation from "../Designation.json";
import State from "../State.json";







function Dropdown() {

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filtDist, setfiltDist] = useState([]);


  const getDistrict = () => {
    if (!selectedState) return;
    const ret = State.states.filter(({ state }) => selectedState === state);
    // console.log(ret[0].districts);
    return setfiltDist(ret[0].districts);
  };
  // render districts array as options in District dropdown

  useEffect(() => {
    getDistrict(selectedState);
    handleState(selectedState);
  }, [selectedState]);



//app.js
  const [formValues, setDepartment] = useState({});
  const [desValue, setDesignation] = useState({});
  const [stateValue, setStateValue] = useState({});
  const [districtValue, setDistValue] = useState({});



  const [finalData, setFinalData] = useState({
    formValues: [],
    desValue: [],
    stateValue: [],
    districtValue: [],
   
  });

  useEffect(() => {
    setFinalData({
      ...finalData,
      formValues,
      desValue,
      stateValue,
      districtValue,
     
    });
  }, [formValues, desValue, stateValue, districtValue]);


  const handleDepartment = (selected) => {
    // console.log(selected);
    setDepartment({ department: selected });
  };
  const handleDesignation = (selected) => {
    // console.log(selected);
    setDesignation({ designation: selected });
  };

  const handleState = (selectedState) => {
    // console.log(selectedState);
    setStateValue({ States: selectedState });
  };
  const handleDistrict = (districtValue) => {
    // console.log(districtValue);
    setDistValue({ districts: districtValue });
  };
















  return (
    <form>
      <div>
        <table>
          <tr>
            <td>
              <label>
                <b>Select State: </b>
              </label>
            </td>
            <td>
              <select
                required={true}
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                }}
                id="test"
              >
                <option>-----------Select State------------</option>
                {State &&
                  State.states.map(({ state }) => (
                    <option value={state}>{state}</option>
                  ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Select District:</b>{" "}
              </label>
            </td>
            <td>
              <>
                <select
                  required={true}
                  value={selectedDistrict}
                  onChange={(event) => {
                    const { value } = event.target;

                    setSelectedDistrict(value);
                    handleDistrict(value);
                  }}
                >
                  <option selected disabled={false}>
                    ----------Select District-----------
                  </option>
                  {filtDist.length !== 0 &&
                    filtDist.map((dist) => (
                      <option key={Math.trunc(Math.random() * 1000000)}>
                        {dist}
                      </option>
                    ))}
                </select>
              </>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b> Select Department:</b>{" "}
              </label>
            </td>
            <td>
              <select
                required={true}
                onChange={(event) => {
                  handleDepartment(event.target.value);
                }}
              >
                <Fragment>
                  <option selected disabled=" ">
                    -------Select Department-------
                  </option>
                  {Department.map((Department) => (
                    <option
                      key={Department.id}
                      name={Department.name}
                      value={Department.name}
                    >
                      {Department.name}
                    </option>
                  ))} 
                </Fragment> 
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Select Designation: </b>
              </label>
            </td>
            <td>
              <select
                required={true}
                onChange={(event) => {
                  handleDesignation(event.target.value);
                }}
              >
               
                  <option selected disabled=" ">
                    -------Select Designation-------
                  </option>
                  {Designation.map((Designation) => (
                    <option
                      key={Designation.id}
                      name={Designation.name}
                      value={Designation.name}
                    >
                      {Designation.name}
                    </option>
                  ))}
                
              </select>
            </td>
          </tr>
          <br />
        </table>
      </div>
    </form>
  );
}

export default Dropdown;
