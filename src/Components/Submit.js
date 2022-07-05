import React from 'react';
import url from "../"

function Submit(props) {
  return (
    <form>
  
    <input
    required={true}
      type="submit"
      value="Submit"
      style={{align:"center",padding:"5px",margin:"10px 0px 0px 40rem",color:"white",background:"blue"}}
      onClick={(event) => {
        event.preventDefault();
        
        
        // postDB(event);
        // window.location.reload();
      }}
    />
  </form>
  )
}

export default Submit