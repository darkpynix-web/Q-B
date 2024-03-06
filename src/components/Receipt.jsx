import React, { useEffect, useState } from 'react'
import { Taskbar } from './index'
// import { v4 as itemIds } from 'uuid';

const Receipt = ({ unheldReceipt, counters, handleActiveIndex, activeIndex, selectedItem, onAddQuantity, onMinusQuantity, onSetQuantity, onRemoveItem }) => {
    // const selectedUnheldItems = unheldReceipt?.selectedItem;
    // console.log('mmm', selectedUnheldItems)
    // const combinedItems = [selectedItem, ...selectedUnheldItems]
    // const generateUnigueId = () => {
    //     return itemIds();
    // }
    const [mergedItems, setMergedItems] = useState([]);


    useEffect(() => {
        if (unheldReceipt && unheldReceipt.selectedItem) {
            const combinedItems = [...selectedItem, ...unheldReceipt.selectedItem]
            setMergedItems(combinedItems)
        } else {
            setMergedItems(selectedItem);
        }
    }, [unheldReceipt, unheldReceipt?.selectedItem, selectedItem])

    const calculateExtPrice = (item, counter) => {
        return (item.price * counter).toLocaleString();
    }
    return (
        <div className='item-lister'>
            {mergedItems.length > 0 ? (
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
                        {mergedItems.map((item, index) => (
                            <tr key={item.id}
                                data-index={index}
                                className={activeIndex === index ? 'miracle' : ''}
                                onClick={() => handleActiveIndex(index)}
                            >
                                <td>{item.id}</td>
                                <td>
                                    <div className="flex">
                                        {item.name}
                                        <div className="buttons">
                                            <button>Edit</button>
                                            <button>Return Item</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex">
                                        <input
                                            type="number"
                                            value={unheldReceipt?.selectedItem[index]?.counters || counters[index]}
                                            onChange={(e) => {
                                                const newValue = parseInt(e.target.value) || 0;
                                                onSetQuantity(index, newValue); // Call the onSetQuantity function
                                            }}
                                        />
                                        <div className="buttons">
                                            <button onClick={() => onAddQuantity(index)}>Qty +</button>
                                            <button onClick={() => onMinusQuantity(index)}>Qty -</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex">
                                        {item.price.toLocaleString()}
                                        <button>Qty/Price/Discount</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex">
                                        {calculateExtPrice(item, counters[index])}
                                        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>) :
                <Taskbar />
            }
        </div>
    )
}

export default Receipt