import React from 'react'


function Records(props) {

const { dbData } = props.values;
console.log(dbData);




  return (
    <div>
    
    <p>Records</p>
    <p> {dbData}</p>
    </div>
  )
}

export default Records