import React, { useState } from 'react';
import { $Header, ReceiptHolder } from '../index';

const MakeASale = ({ unheldReceipt, isCustomerSelectOpen, onHeldReceipt, customers, items, handleAddInventoryFormAdd, handleAddCustomerFormAdd, onSelectOption }) => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedCustomerNew, setSelectedCustomerNew] = useState([]);
    const [counters, setCounters] = useState([]);
    const [heldReceiptId, setheldReceiptId] = useState(4)
    const [ConfirmationOpen, setConfirmationOpen] = useState(false)
    const [customerSelectOpen, setCustomerSelectOpen] = useState(false)
    const [totalDue, setTotalDue] = useState(0.00);
    const [isAmountDueReset, setIsAmountDueReset] = useState(false);
	
	console.log('from MakeASale', unheldReceipt)


    const handlePickedItem = (item) => {
        if (selectedItem.some((existingItem) => existingItem.id === item.id)) {
            setConfirmationOpen(true);
        } else {
            setSelectedItem([...selectedItem, item]);
            setCounters([...counters, 1]); // Initialize counter for the new item

        }
    };

    const handleHeldReceipt = () => {
        const newReceiptId = `receipt-${heldReceiptId}`;

    // Combine selected items and selected customers into a single object with an "id" property
    const combinedArray = {
        id: newReceiptId,
		selectedItem: selectedItem,
		selectedCustomer: selectedCustomerNew,
        counters: counters,
		priceTotal: sumExtPrice(),
		numberOfItems: numberOfItems(),
		date: date(),
		time: time(),
      }
    onHeldReceipt(combinedArray)
    // Combine existing held items with the new combinedArray

    // Clear selected items and selected customers
    setSelectedItem([]);
    setSelectedCustomerNew([]);

    // Increment the receipt ID counter
    setheldReceiptId(heldReceiptId + 1);

    // Update helds with the new array
    }
    const handlePickedCustomer = (customer) => {
        setSelectedCustomerNew([customer]);
    };
    const removeItemFromArray = (id) => {
        const updatedItems = selectedItem.filter((item) => item.id !== id);
        setSelectedItem(updatedItems);

        // Find the index of the item to remove from counters
        const itemIndexToRemove = counters.findIndex((count, index) => selectedItem[index].id === id);
        if (itemIndexToRemove !== -1) {
            // Remove the corresponding counter
            setCounters((prevCounters) => {
                const updatedCounters = [...prevCounters];
                updatedCounters.splice(itemIndexToRemove, 1);
                return updatedCounters;
            });
        }
    };


    const handleConfirmAdd = () => {

        setConfirmationOpen(false);
    };
    const handleCustomerSelectOpen = () => {
        setCustomerSelectOpen(!customerSelectOpen)
        isCustomerSelectOpen()
    }

    const handleCustomerSelectCancel = () => {
        setCustomerSelectOpen(false)
    }
    const handleCancelAdd = () => {
        // User canceled the addition
        setConfirmationOpen(false);
    };

    const onSetQuantity = (index, newValue) => {
        const newCounters = [...counters];
        newCounters[index] = newValue;
        setCounters(newCounters);
    };

    const handleAddQuantity = (index) => {
        const newCounters = [...counters];
        newCounters[index] += 1;
        setCounters(newCounters);
    };

    const handleMinusQuantity = (index) => {
        if (counters[index] > 0) {
            const newCounters = [...counters];
            newCounters[index] = 1;
            setCounters(newCounters);
        }
    };
    const sumExtPrice = () => {
        let total = 0;
        for (let i = 0; i < selectedItem.length; i++) {
          total += selectedItem[i].price * counters[i];
        }
        
        // Only update totalDue if handleAmountDue hasn't been called
        if (!isAmountDueReset) {
          setTotalDue(total); // Set the totalDue state with the calculated value
        }
      
        return total.toLocaleString();
      }
      
      const handleAmountDue = () => {
        setTotalDue(0.00); // Reset the totalDue state to 0.00
        setIsAmountDueReset(true); // Set a flag to indicate that handleAmountDue has been called
      }
        //   const amountDue = () => {
        //     let total = 0;
        //     for (let i = 0; i < selectedItem.length; i++) {
        //       total += selectedItem[i].price * counters[i];
        //     }
        //     return total.toLocaleString(); // Return the formatted value
        //   };
      
      const numberOfItems = () => selectedItem.length;
	  const time = () => new Date().toLocaleTimeString();
	  const date = () => new Date().toLocaleDateString()
    return (
        <div>
            <$Header
                label=''
                iWantToControl={true}
                makesalesSearchControl={true}
                trippleDotControl={true}
                items={items}
                onSelectedItem={handlePickedItem}
                handleAddInventoryFormAdd={handleAddInventoryFormAdd}
                handleAddCustomerFormAdd={handleAddCustomerFormAdd}
                onSelectOption={onSelectOption}
                selectedCustomerNew={selectedCustomerNew}
                customerNameSpaceControl={true}
                handleCustomerSelectOpen={handleCustomerSelectOpen}
            />
            <ReceiptHolder
                customers={customers}
                selectedItem={selectedItem}
                counters={counters}
                onAddQuantity={handleAddQuantity}
                onMinusQuantity={handleMinusQuantity}
                onSetQuantity={onSetQuantity}
                handleCancelAdd={handleCancelAdd}
                handleConfirmAdd={handleConfirmAdd}
                ConfirmationOpen={ConfirmationOpen}
                onRemoveItem={removeItemFromArray}
                handleCustomerSelectCancel={handleCustomerSelectCancel}
                customerSelectOpen={customerSelectOpen}
                onSelectedCustomer={handlePickedCustomer}
                selectedCustomerNew={selectedCustomerNew}
                handleAddCustomerFormAdd={handleAddCustomerFormAdd}
                handleHeldReceipt={handleHeldReceipt}
                sumExtPrice={sumExtPrice}
                totalDue={totalDue}
                handleAmountDue={handleAmountDue}
                unheldReceipt={unheldReceipt}
            />
        </div>
    );
};

export default MakeASale;
