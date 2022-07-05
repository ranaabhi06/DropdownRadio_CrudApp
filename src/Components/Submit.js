import React,{useState} from "react";
import axios from "axios";

function Submit() {

  

  const postToDB = async () => {
    // axios.get("http://localhost:5000/data").then((res) => {
    //   setDbData(res.data);
    // });

   await axios.post("http://localhost:5003/data", {
   
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
        
        
<<<<<<< HEAD
        postToDB();
        window.location.reload();
=======
        // postDB(event);
        // window.location.reload();
>>>>>>> 74397e8eaa40c670a0c02c9d5d7fd5b4e6895a69
      }}
    />
  </form>
  )
}

export default Submit;
