import React, { useState } from "react";
import "./record.css";
import axios from "axios";
function Records(props) {
  const [acceptId, setAcceptId] = useState([]);
  let data = props.acceptData;

  let arrId = [];
  const getID = (id) => {
    // arrId.push(id);
    setAcceptId((pre) => [...pre, id]);
  };
  // console.log(acceptId);

  const deleteUser = async (acceptId) => {
    console.log(acceptId);
    acceptId.forEach(async (id) => {
      console.info({ id });
      await axios.delete(`http://localhost:5003/data/${id}`).then(props.refresh);
    });
    // props.refresh();
  };
  return (
    <div>
      <p>
        ----User Records---- <br />
        <input
          type="button"
          value="Delete"
          onClick={deleteUser.bind(null, acceptId)}
        />
      </p>
      {data.map((i) => {
        return (
          <p>
            <table className="recordCss">
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Id:</label>
                </td>
                <td className="recordCss">{i.id}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Name</label>
                </td>
                <td className="recordCss">{i.finalData[1].name}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Organization</label>
                </td>
                <td className="recordCss">{i.finalData[1].companyName}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Ex-Employee</label>
                </td>
                <td className="recordCss">{i.finalData[4]}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Date of Birth</label>
                </td>
                <td className="recordCss">{i.finalData[0].dob}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Date of Joing</label>
                </td>
                <td className="recordCss">{i.finalData[0].doj} </td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Department</label>{" "}
                </td>
                <td className="recordCss">
                  {i.finalData[2].department.department}{" "}
                </td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Designamtion</label>{" "}
                </td>
                <td className="recordCss">{i.id}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Gender</label>
                </td>
                <td className="recordCss">{i.finalData[3]}</td>
              </tr>

              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Intrested Languages</label>
                </td>
                <td className="recordCss">{i.finalData[5].language}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Vehicles</label>
                </td>
                <td className="recordCss">{i.finalData[5].vehicle}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">State</label>{" "}
                </td>
                <td className="recordCss">
                  {i.finalData[2].stateValue.selectedState}{" "}
                </td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">District</label>{" "}
                </td>
                <td className="recordCss">
                  {i.finalData[2].districtValue.districtValue}{" "}
                </td>
              </tr>
              <tr className="recordCss">
                <td>
                  <input type="button" value="Edit" />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    value={i.id}
                    onChange={() => {
                      getID(i.id);
                    }}
                  />
                </td>
              </tr>
            </table>
          </p>
        );
      })}
    </div>
  );
}

export default Records;
