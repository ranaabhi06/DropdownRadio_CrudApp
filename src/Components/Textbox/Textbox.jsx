import React, { useState } from "react";
const Textbox = (props) => {
const [textbox, setTextbox] = useState({
    name: "",
    companyName: ""
});
const onInputChange = e => {
    setTextbox({...textbox,[e.target.name]: e.target.value});
}

props.text(textbox);

    return (
        <>
        <div style={{backgroundColor:"#eee", marginLeft:"20rem",marginTop:"1rem", paddingLeft:"10rem", paddingTop:"1rem", marginRight:"20rem"}}>
        <form>
        <h3 style={{color:"Red",marginLeft:"7rem"}}>Registration Form</h3>
            <table >
                
                <tr>
                    <td>
                        <label htmlFor="name" style={{fontWeight:"bold" }}>Name</label>
                    </td>
                    <td>
                        <input required style={{marginLeft:"3rem"}} type="text" id="name" name="name" placeholder="Enter your full name" value={textbox.name} onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="companyName" style={{fontWeight:"bold" }}> Organisation</label>
                    </td>
                    <td>
                        <input type="text" style={{marginLeft:"3rem"}} id="companyName" name="companyName" placeholder="Enter your company name" value={textbox.companyName} onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
            </table>
        </form>

        </div>
        </>
    );
}

export default Textbox;