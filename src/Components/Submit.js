import React,{useState,useEffect} from "react";
import axios from "axios";

function Submit(props) {

  const saveRecords=()=>{
    console.log(props.checkboxD,props.radioG,props.radioP)
}


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
<<<<<<< HEAD
    <>
   
    <form onSubmit={e => submitHandler(e)}>
    <button type="submit" onClick={e => saveHandler(e)}  >Save</button>
    </form>
    </>
    
=======

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

>>>>>>> 5881d5928090454d30c95b1e34bd035c9cb71361
  )
}

export default Submit;
