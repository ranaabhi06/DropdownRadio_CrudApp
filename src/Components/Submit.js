import React,{useState} from "react";
import axios from "axios";

function Submit(props) {
  const saveRecords=()=>{
    console.log(props.checkboxD,props.radioG,props.radioP)
}

  return (
    <form>
    <input
    required={true}
      type="submit"
      value="Submit"
      style={{align:"center",padding:"5px",margin:"10px 0px 0px 40rem",color:"white",background:"blue"}}
      onClick={(event) => {
        event.preventDefault();
      saveRecords();
      }}
    />
  </form>
  )
}

export default Submit;
