import React, { useState } from "react";
const Datepicker = () => {
const [datepicker, setDatepicker] = useState({
    dob: "",
    doj: ""
});
const onInputChange = e => {
    setDatepicker({...datepicker,[e.target.name]: e.target.value});
}

console.log(datepicker);
    return (
        <>
        <form>
            <table>
                <tr>
                    <td>
                        <label htmlFor="dob">Date of Birth</label>
                    </td>
                    <td>
                        <input type="date" name="dob" id="dob" value={datepicker.dob}  onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="doj">Date of Joining</label>
                    </td>
                    <td>
                        <input type="date" name="doj" value={datepicker.doj} onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
            </table>
        </form>
        </>
    );
}

export default Datepicker;