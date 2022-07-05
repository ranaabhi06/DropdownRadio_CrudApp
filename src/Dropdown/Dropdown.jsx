import React from "react";








function Dropdown() {
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
                // value={selectedState}
                // onChange={(e) => {
                //   setSelectedState(e.target.value);
                // }}
                // id="test"
              >
                <option>-----------Select State------------</option>
                {/* {State &&
                  State.states.map(({ state }) => (
                    <option value={state}>{state}</option>
                  ))} */}
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
                //   value={selectedDistrict}
                //   onChange={(event) => {
                //     const { value } = event.target;

                //     setSelectedDistrict(value);
                //     props.onSelect3(value);
                //   }}
                >
                  <option selected disabled={false}>
                    ----------Select District-----------
                  </option>
                  {/* {filtDist.length !== 0 &&
                    filtDist.map((dist) => (
                      <option key={Math.trunc(Math.random() * 1000000)}>
                        {dist}
                      </option>
                    ))} */}
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
                // onChange={(event) => {
                //   props.onSelect(event.target.value);
                // }}
              >
                {/* <Fragment> */}
                  <option selected disabled=" ">
                    -------Select Department-------
                  </option>
                  {/* {Department.map((Department) => (
                    <option
                      key={Department.id}
                      name={Department.name}
                      value={Department.name}
                    >
                      {Department.name}
                    </option>
                  ))} */}
                {/* </Fragment> */}
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
                // onChange={(event) => {
                //   props.onSelect1(event.target.value);
                // }}
              >
               
                  <option selected disabled=" ">
                    -------Select Designation-------
                  </option>
                  {/* {Designation.map((Designation) => (
                    <option
                      key={Designation.id}
                      name={Designation.name}
                      value={Designation.name}
                    >
                      {Designation.name}
                    </option>
                  ))} */}
                
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
