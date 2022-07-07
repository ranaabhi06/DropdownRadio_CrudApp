import React, { useState } from "react";
const Datepicker = (props) => {
const [datepicker, setDatepicker] = useState({
    dob: "",
    doj: ""
});
const onInputChange = e => {
    setDatepicker({...datepicker,[e.target.name]: e.target.value});
}

props.det(datepicker);
    return (
        <>
        <div style={{backgroundColor:"#eee", marginLeft:"20rem",paddingLeft:"10rem", marginRight:"20rem"}}>
        <form>
            <table>
                <tr>
                    <td>
                        <label htmlFor="dob" style={{fontWeight:"bold",tabSize:"4" }}>Date of Birth</label>
                    </td>
                    <td>
                        <input style={{marginLeft:"2rem"}} type="date" name="dob" id="dob" value={datepicker.dob}  onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="doj" style={{fontWeight:"bold" }}>Date of Joining</label>
                    </td>
                    <td>
                        <input style={{marginLeft:"2rem"}} type="date" name="doj" value={datepicker.doj} onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
            </table>
        </form>

        </div>
        </>
    );
}

export default Datepicker;