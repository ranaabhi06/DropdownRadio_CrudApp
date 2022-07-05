import React,{useState,useEffect} from "react";
import axios from "axios";

function Submit(props) {
const finalData = props.values
 

 


 
  

  const postToDB = async () => {
   

   await axios.post("http://localhost:5003/data", {
      
      id: "IC" + Math.trunc(Math.random() * 99),
      finalData
    });
  };
 console.log(props.values)



const submitHandler = e => {
  console.log("hello");
}
const saveHandler = (e) =>{
  e.preventDefault();
  postToDB();
} 
  return (
    <>
   
    <form onSubmit={e => submitHandler(e)}>
    <button type="submit" onClick={e => saveHandler(e)}  >Save</button>
    </form>
    </>
    



  )
}

export default Submit;
