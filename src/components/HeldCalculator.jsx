import React from 'react'
import './componentsSyles/Receipt.css'
const HeldCalculator = ({activeHeldReceipt}) => {
    // const activeHeldReceipt = held[activeIndex]
    console.log('from HeldCalculator', activeHeldReceipt)
    return (
        <div className='calculator-box'>
            <div className="details">
                <p>Total Qty Sold</p>
                <span>0</span>
            </div>
            <div className="details">
                <p>Total Qty Returned</p>
                <span>0</span>
            </div>
            <div className="details">
                <p>SubTotal</p>
                <span>0</span>
            </div>
            <div className="details">
                <p>Tax</p>
                <span>0</span>
            </div>
            <div className="sum details">
                <h3>Total</h3>
                <span>₦{activeHeldReceipt?.priceTotal}.00</span>
            </div>
        </div>
    )
}

export default HeldCalculator