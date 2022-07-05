import React from 'react'
import './radio.css'
const Radio = () => {
  return (
    <div>
        <table>
            <tr>
                <td className='radioCss'>
                    <label htmlFor="">Select Gender</label>
                </td>
                <td>
                    <input type="radio" name="" id="" />Male
                    <input type="radio" name="" id="" />Female
                    <input type="radio" name="" id="" />Other
                </td>
            </tr>
            <tr>
                <td className='radioCss'>
                    <label htmlFor="">Are you Ex-Employee</label>
                </td>
                <td>
                    <input type="radio" name="" id="" />Yes
                    <input type="radio" name="" id="" />No
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Radio