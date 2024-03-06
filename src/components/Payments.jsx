import React from 'react'
import './componentsSyles/Receipt.css'
const Payments = ({ totalDue, handleOpenCashDialog }) => {
  return (
    <div className='payments-box'>
      <div className="btns">
        <button onClick={handleOpenCashDialog}>Cash</button>
        <button>Credit</button>
        <button>Account</button>
      </div>
      <div className="total">
        <h1>Amount Due</h1>
        <span>₦{totalDue.toLocaleString()}.00</span>
      </div>
    </div>
  )
}

export default Payments