import React, { useState } from "react";
const Datepicker = () => {
const [datepicker, setDatepicker] = useState({
    dob: "",
    doj: ""
});
const dobHandler = e => {
    setDatepicker([...datepicker,datepicker.dob]);
}
const dojHandler = e => {
    setDatepicker([...datepicker,datepicker.doj])
}

    return (
        <>
        <form>
            <table>
                <tr>
                    <td>
                        <label htmlFor="">Date of Birth</label>
                    </td>
                    <td>
                        <input type="date" name="dateOfBirth"  onChange={e => {dobHandler(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Date of Joining</label>
                    </td>
                    <td>
                        <input type="date" name="dateOfJoining"  onChange={e => {dojHandler(e)}}/>
                    </td>
                </tr>
            </table>
        </form>
        </>
    );
}

export default Datepicker;