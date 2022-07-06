import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./Records/Records";

function Submit(props) {
  const finalData = props.values;

  const [toRecord, setToRecord] = useState({});

  const postToDB = async () => {
    const postData = await axios.post("http://localhost:5003/data", {
      id: "IC" + Math.trunc(Math.random() * 99),
      ...finalData,
    });
  };
  
  

  const saveHandler = (e) => {
    e.preventDefault();
    
    postToDB();
    props.acceptDataFromSub(toRecord);
  };
  // console.log(toRecord)
  return (
    <>
      <form>
        <button type="submit" onClick={(e) => saveHandler(e)}>
          Save
        </button>
      </form>
    </>
  );
}

export default Submit;
