import React, { useState, useEffect } from 'react'
import { $Header } from '../index'
import Preview from './Preview'
const HeldReceipt = ({ held, onSelectOption, handleOpenCustomerSelect, onUnhold }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [togglePreviewButtonName, setTogglePreviewButtonName] = useState('Show Details')
  const [openShowPreview, setOpenShowPreview] = useState(false);

  const handleUnhold = () => {
    // Remove the activeHeldReceipt from the held array and store it in a variable
    const unheldReceipt = held[activeIndex];
    const updatedHeld = held.filter((item, index) => index !== activeIndex);

    // Call the onUnhold function to transfer the unheld receipt to the parent component
    onUnhold(unheldReceipt, updatedHeld);
  };

  const handleShowPreview = () => {
    setOpenShowPreview(!openShowPreview)
    setTogglePreviewButtonName(openShowPreview ? 'Show Details' : 'Hide Details')
  }
  const handleShowPreviewCancel = () => {
    setOpenShowPreview(false);
    setTogglePreviewButtonName('Show Details')
  }
  useEffect(() => {
    // Set the active index when the `held` array changes
    if (held.length === 1) {
      setActiveIndex(0);
    } else if (held.length > 1) {
      setActiveIndex(held.length - 1);
    }
  }, []);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
    console.log('MIracle click click')
    // const activeRow = document.querySelector(`tr[data-index="${index}"]`);

    // // if (activeRow) {
    // //   activeRow.scrollIntoView({
    // //     block: 'start'
    // //   });
    // // }
  };
  return (
    <div>
      < $Header
        label='Search'
        iWantToControl={true}
        heldReceiptControl={true}
        onSelectOption={onSelectOption}
        handleShowPreview={handleShowPreview}
        togglePreviewButtonName={togglePreviewButtonName}
        handleUnhold={handleUnhold}
      />
      <div className="item-lister">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>No. of Items</th>
              <th>Total</th>
              <th >Company Name</th>
            </tr>
          </thead>
          <tbody>
            {held.map((heldReceipt, index) => (
              <tr
                key={heldReceipt.id}
                data-index={index}
                className={activeIndex === index ? 'miracle' : ''}
                onClick={() => handleActiveIndex(index)}
                onDoubleClick={handleShowPreview}
              >
                <td>{heldReceipt.date}</td>
                <td>{heldReceipt.time}</td>
                <td>{heldReceipt.numberOfItems}</td>
                <td>{heldReceipt.priceTotal}</td>
                {heldReceipt.selectedCustomer && heldReceipt.selectedCustomer.length > 0 ? (<td>{heldReceipt.selectedCustomer[0].companyName}</td>) : (<td>No Customer Selected</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openShowPreview &&
        <Preview
          held={held}
          handleOpenCustomerSelect={handleOpenCustomerSelect}
          activeIndex={activeIndex}
          handleActiveIndex={handleActiveIndex}
          handleShowPreviewCancel={handleShowPreviewCancel}
        />}
    </div>
  )
}

export default HeldReceipt