import React from 'react'
import './checkbox.css'
const CheckBox = () => {
  return (
    <div>
        <form action="">
            <table>
                <tr>
                    <td className='checkboxCss'>
                        <label htmlFor="">
                        Intrested Language
                        </label>
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" name="" id="" />React
                        <input type="checkbox" name="" id="" />Python
                        <input type="checkbox" name="" id="" />Java
                    </td>
                </tr>
                <tr>
                    <td className='checkboxCss'>
                        <label htmlFor="">
                        Have you vehicles
                        </label>
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" name="" id="" />Bicyles
                        <input type="checkbox" name="" id="" />Bike
                        <input type="checkbox" name="" id="" />Car
                    </td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default CheckBox