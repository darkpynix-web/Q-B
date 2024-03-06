import React, { useEffect, useState } from 'react';

const ReceiptControl = ({unheldReceipt, selectedItem, handleHeldReceipt}) => {
  const [mergedItems, setMergedItems] = useState([]);

  useEffect(() => {
      if (unheldReceipt && unheldReceipt.selectedItem) {
          const combinedItems = [...selectedItem, ...unheldReceipt.selectedItem]
          setMergedItems(combinedItems)
      } else {
          setMergedItems(selectedItem);
      }
      disableButton()
  }, [unheldReceipt, unheldReceipt?.selectedItem, selectedItem])
  const disableButton = () => {
    const btns1 = document.querySelector('.receipt-control-box .control-btns button:nth-child(1)')
    const btns2 = document.querySelector('.receipt-control-box .control-btns button:nth-child(3)')
    const btns3 = document.querySelector('.receipt-control-box .control-btns button:nth-child(4)')
    if(mergedItems.length === 0) {
      btns1.style.backgroundColor = 'var(--border-clr)';
      btns2.style.backgroundColor = 'var(--border-clr)';
      btns3.style.backgroundColor = 'var(--border-clr)';
      btns1.style.cursor = 'not-allowed'
      btns2.style.cursor = 'not-allowed'
      btns3.style.cursor = 'not-allowed'
    } else {
      btns1.style.backgroundColor = '';
      btns2.style.backgroundColor = '';
      btns3.style.backgroundColor = '';
      btns1.style.cursor = ''
      btns2.style.cursor = ''
      btns3.style.cursor = ''
    }
  }
  return (
    <div className='receipt-control-box'>
      <div className="control-btns">
        <button onClick={handleHeldReceipt}>Put on Hold</button>
        <button>Cancel</button>
        <button>Save Only</button>
        <button>Save and Print</button>
      </div>
    </div>
  )
}

export default ReceiptControl