import React, { useState } from "react";
const Textbox = () => {
const [textbox, setTextbox] = useState({
    name: "",
    companyName: ""
});
const nameHandler = e => {
    setTextbox([...textbox,textbox.name]);
}
const companyNameHandler = e => {
    setTextbox([...textbox,textbox.companyName])
}

    return (
        <>
        <form>
            <table>
                <tr>
                    <td>
                        <label htmlFor="">Name</label>
                    </td>
                    <td>
                        <input type="text" name="name" placeholder="Enter your full name" value={textbox.name} onChange={e => {nameHandler(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor=""> Organisation</label>
                    </td>
                    <td>
                        <input type="text" name="company name" placeholder="Enter your company name" value={textbox.companyName} onChange={e => {companyNameHandler(e)}}/>
                    </td>
                </tr>
            </table>
        </form>
        </>
    );
}

export default Textbox;