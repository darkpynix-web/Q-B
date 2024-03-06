import React, { useState, useRef, } from 'react';
import '../componentsSyles/Preview.css'
import { HeldCalculator } from '../index'
const Preview = ({ handleOpenCustomerSelect, activeIndex, held, handleShowPreviewCancel, handleActiveIndex }) => {
    const activeHeldReceipt = held[activeIndex]
    const [isResizing, setIsResizing] = useState(false);
    const [resizeOffset, setResizeOffset] = useState(0);
    const [activeRow, setActiveRow] = useState(-1)
    const handleActiveRow = (row) => {
        setActiveIndex(row);
        console.log('MIracle click click')
    };
    const previewRef = useRef(null);

    const startResize = (e) => {
        setIsResizing(true);
        setResizeOffset(e.clientX);
    };

    const stopResize = () => {
        setIsResizing(false);
    };

    const resizePreview = (e) => {
        if (!isResizing) return;

        const newWidth = previewRef.current.offsetWidth - (e.clientX - resizeOffset);
        if (newWidth >= 300) { // Adjust the minimum width as needed
            previewRef.current.style.width = `${newWidth}px`;
            setResizeOffset(e.clientX);
        }
    };
    const calculateExtPrice = (item, counter) => {
        return (item.price * counter).toLocaleString();
    }
    const sumExtPrice = () => {
        let total = 0;
        for (let i = 0; i < item.length; i++) {
            total += item[i].price * counters[1];
        }
    }
    return (
        <div
            className="receipt-preview-box"
            onMouseDown={startResize}
            onMouseUp={stopResize}
            onMouseMove={resizePreview}
            ref={previewRef}
        >
            <div className='label' ><button onClick={handleShowPreviewCancel}>X</button></div>
            {activeHeldReceipt?.selectedCustomer ? <div className="customer-name-space"><h3>{activeHeldReceipt?.selectedCustomer?.[0]?.companyName}</h3><button onClick={handleOpenCustomerSelect}>Edit/Add Customer</button></div> : null}
            <div className="item-lister">
                <table className='item-lister-table'>
                    <thead>
                        <tr>
                            <th style={{ width: '100px' }}>Item ID</th>
                            <th>Item Name</th>
                            <th style={{ width: '200px' }}>Quantity</th>
                            <th style={{ width: '200px' }}>Regular Price</th>
                            <th style={{ width: '200px' }}>Ext Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeHeldReceipt?.selectedItem?.map((item, row) => (
                            <tr key={item?.id} data-row={row} onClick={() => handleActiveIndex(row)} className={activeRow === row ? 'miracle' : ''}>
                                <td>{item?.id}</td>
                                <td>{item?.name}</td>
                                <td>{activeHeldReceipt.counters[row]}</td>
                                <td>{item?.price?.toLocaleString()}</td>
                                <td>{calculateExtPrice(item, activeHeldReceipt.counters[row])}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <HeldCalculator
                // activeIndex={activeIndex}
                //  held={held}
                activeHeldReceipt={activeHeldReceipt}
            />
        </div>
    )
}

export default Preview