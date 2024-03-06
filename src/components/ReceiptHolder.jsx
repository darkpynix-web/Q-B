import React, { useState, useEffect } from 'react';
import './componentsSyles/Receipt.css'
import { Receipt, Calculator, ReceiptControl, Payments, ConfirmationDialog, CustomerSelect, PaymentDialog } from './index';
const ReceiptHolder = ({ unheldReceipt, handleAmountDue, totalDue, sumExtPrice, handleAddCustomerFormAdd, customers, selectedCustomerNew, onSelectedCustomer, customerSelectOpen, handleCustomerSelectCancel, ConfirmationOpen, handleConfirmAdd, handleCancelAdd, selectedItem, counters, onAddQuantity, onMinusQuantity, onSetQuantity, handleHeldReceipt, onRemoveItem }) => {

    const [activeIndex, setActiveIndex] = useState(-1); // Start with -1 until an item is selected
    const [openCashDialog, setOpenCashDialog] = useState(false);

    const handleOpenCashDialog = () => {
        setOpenCashDialog(true)
    }
    const cancelCashDialog = () => {
        setOpenCashDialog(false)
    }

    const handleCashDialogSaveClick = () => {
        handleAmountDue()
        setOpenCashDialog(false)
    }
    useEffect(() => {
        if (selectedItem.length === 1) {
            setActiveIndex(0); // Set to 0 if there's only one item
        } else if (selectedItem.length > 1) {
            setActiveIndex(selectedItem.length - 1); // Set to the index of the last item if there are multiple items
        }
    }, [selectedItem]); // Watch for changes in selectedItem array

    const handleActiveIndex = (index) => {
        setActiveIndex(index);
        const activeRow = document.querySelector(`tr[data-index="${index}"]`);

        if (activeRow) {
            activeRow.scrollIntoView({
                block: 'start'
            });
        }
    };

    return (
        <div className="receipt-holder-box">
            <ConfirmationDialog
                isOpen={ConfirmationOpen}
                onCancel={handleCancelAdd}
                onConfirm={() => handleConfirmAdd(activeIndex)}
            />
            <CustomerSelect
                isOpen={customerSelectOpen}
                onCancel={handleCustomerSelectCancel}
                onSelectedCustomer={onSelectedCustomer}
                selectedCustomerNew={selectedCustomerNew}
                customers={customers}
                handleAddCustomerFormAdd={handleAddCustomerFormAdd}

            />
            <PaymentDialog
                isOpen={openCashDialog}
                onCancel={cancelCashDialog}
                totalDue={totalDue}
                handleCashDialogSaveClick={handleCashDialogSaveClick}
            />


            <Receipt
                handleActiveIndex={handleActiveIndex}
                activeIndex={activeIndex}
                selectedItem={selectedItem}
                onAddQuantity={onAddQuantity}
                onMinusQuantity={onMinusQuantity}
                counters={counters}
                onSetQuantity={onSetQuantity}
                onRemoveItem={onRemoveItem}
                unheldReceipt={unheldReceipt}
            />
            <Calculator
                sumExtPrice={sumExtPrice}
                unheldReceipt={unheldReceipt}
            />
            <Payments
                totalDue={totalDue}
                handleOpenCashDialog={handleOpenCashDialog}
                unheldReceipt={unheldReceipt}
            />
            <ReceiptControl
                selectedItem={selectedItem}
                handleHeldReceipt={handleHeldReceipt}
                unheldReceipt={unheldReceipt}
            />
        </div>
    );
};

export default ReceiptHolder;
