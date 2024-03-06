import React from 'react'
import './componentsSyles/PaymentDialog.css'
const PaymentDialog = ({ isOpen, onCancel, totalDue, handleCashDialogSaveClick }) => {
  if (!isOpen) return null;
  console.log('from paymentdialog', totalDue)
  const handleSaveClick = () => {
    // Call the handleCashDialogSaveClick function when the "Save" button is clicked
    handleCashDialogSaveClick();
  };
  return (
    <div className='paymentdialog'>
      <div className="head">Cash</div>
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <div className="amount" id='amount'>₦{totalDue.toLocaleString()}.00</div>
      </div>
      <div className="btn">
        <button>Remove This Payment</button>
        <div className="ctrn">
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentDialog