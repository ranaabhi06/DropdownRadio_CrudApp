import React,{useState} from "react";
import axios from "axios";

function Submit(props) {
 
  const[toDataB,setToDataB]=useState([])
  

  const postToDB = async (finaldata) => {
   

   await axios.post("http://localhost:5003/data", {
      // ..finalData
      id: "IC" + Math.trunc(Math.random() * 99),
    });
  };
  console.log(postToDB());

  return (
    <form>
  
    <input
    required={true}
      type="submit"
      value="Submit"
      style={{align:"center",padding:"5px",margin:"10px 0px 0px 40rem",color:"white",background:"blue"}}
      onClick={(event) => {
        event.preventDefault();
        
        
        postToDB();
        window.location.reload();
      }}
    />
  </form>
  )
}

export default Submit;
