import React,{useState,useEffect} from "react";
import axios from "axios";

function Submit(props) {

  const[finalData,setFinalData]=useState([]);

  //  setFinalData(props.setddToSubmit);

 
  

  const postToDB = async () => {
   

   await axios.post("http://localhost:5003/data", {
      ...finalData,
      id: "IC" + Math.trunc(Math.random() * 99),
    });
  };
 console.log(props.values)
  // const[toDataB,setToDataB]=useState([])
  

  // const postToDB = async (finaldata) => {
   

  //  await axios.post("http://localhost:5003/data", {
  //     // ..finalData
  //     id: "IC" + Math.trunc(Math.random() * 99),
  //   });
  // };
  // console.log(postToDB());

const submitHandler = e => {
  console.log("hello");
}
const saveHandler = (e) =>{
  e.preventDefault();
console.log(props.values);
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
