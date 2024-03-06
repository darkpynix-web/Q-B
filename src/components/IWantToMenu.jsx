import React from 'react'
import './componentsSyles/IwantTo.css'
import { shortcutActions } from '../utils/shortcutActions'
const IWantToMenu = ({ onSelectOption }) => {

  const handleShortcutClick = (action) => {
    onSelectOption(action)
  }
  return (
    <div className='want-to-menu'>
      <ul>
        {shortcutActions.map((action) => (
          <li key={action.id} onClick={() => handleShortcutClick(action.name)}>
            <p>{action.name}</p>
            <i className='bx bx-right-arrow-alt'></i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IWantToMenu



// <li>Make a Sale</li>
//         <li>Accept Return/Exchange</li>
//         <li>Show Held Receipt</li>
//         <li>Show Sales History</li>
//         <li>Make a Customer Order</li>
//         <li>Reports</li>
//         <hr />
//         <li>Custormer List</li>
//         <li>Add Customer</li>
//         <li>Item List</li>
//         <li>Add Item</li>
//         <li>Receive Items</li>
//         <li>Purchassing & Vencdors</li>
//         <hr />
//         <li>Clock In/Out</li>
//         <li>Send Data to MicBook</li>
//         <li>Setup & Preference</li>
//         <hr />
//         <li>Log Out</li>
//         <li>Switch User</li>
//         <li>Exit</li>