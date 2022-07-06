import React from "react";

function Records(props) {
  
  const dbData = props.value;
  console.log(dbData);
  // console.log("hello");
  // console.log(props.value);

  return (
    <div>
      <p>Records</p>
      {/* <p> {dbData.text}</p> */}
    </div>
  );
}

export default Records;
