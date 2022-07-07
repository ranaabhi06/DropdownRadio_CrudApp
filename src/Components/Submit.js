import React from "react";
import axios from "axios";
// import Records from "./Records/Records";

function Submit(props) {
  // const [finalData,setFinalData] =useState()
  const finalData = props.values;
  const postToDB = async () => {
    const postData = await axios.post("http://localhost:5003/data", { finalData});
    props.refresh();
  };

  const saveHandler = (e) => {
    e.preventDefault();
    // setToRecord(finalData);

    console.log(finalData);
    postToDB();
    props.values=[]
    // console.log(props.acceptDataFromSub(finalData))
  };
  // console.log(toRecord)
  return (
    <>
      <form>
        <button
          style={{
            margin: "1rem 0rem 0rem 40rem",
            padding: "5px",
            marginRight: "20rem",
          }}
          type="submit"
          onClick={(e) => saveHandler(e)}
        >
          Save
        </button>
        <p>{finalData.name}</p>
        {/* <Records /> */}
      </form>
    </>
  );
}

export default Submit;
