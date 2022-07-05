import React, { useState } from "react";
const Textbox = () => {
const [textbox, setTextbox] = useState({
    name: "",
    companyName: ""
});
const onInputChange = e => {
    setTextbox({...textbox,[e.target.name]: e.target.value});
}

console.log(textbox);

    return (
        <>
        <form>
            <table>
                <tr>
                    <td>
                        <label htmlFor="name">Name</label>
                    </td>
                    <td>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" value={textbox.name} onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="companyName"> Organisation</label>
                    </td>
                    <td>
                        <input type="text" id="companyName" name="companyName" placeholder="Enter your company name" value={textbox.companyName} onChange={e => {onInputChange(e)}}/>
                    </td>
                </tr>
            </table>
        </form>
        </>
    );
}

export default Textbox;