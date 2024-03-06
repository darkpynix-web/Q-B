import React, { useState, useEffect, useRef } from 'react'
import './componentsSyles/ConfirmationDialog.css'
import { QuickSelectCustomer } from './HeaderSearch';
const CustomerSelect = ({handleAddCustomerFormAdd, isOpen,customers, onCancel, onSelectedCustomer, selectedCustomerNew }) => {
  if (!isOpen) return null;
  const [searchCustomer, setSearchCustomer] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const [showQuickCustomerSelect, setShowQuickCustomerSelect] = useState(false)
  const searchInputRef = useRef(null); // Create a ref for the input field
  const inputFocus = useRef(null);

  const handleInputChange = (e) => {
    setSearchCustomer(e.target.value)
  }
  const handleQuickSelectCustomerClick = (e) => {
    // Prevent the click event from propagating to the document
    e.stopPropagation();
  };
  const handleCustomerPick = (selectedCustomer) => {
    setSelectedCustomer(selectedCustomer);
    setShowQuickCustomerSelect(false)
    onSelectedCustomer(selectedCustomer)
    setSearchCustomer('')
    inputFocus.current.focus();
  }
  const filteredCustomers = customers?.filter(customer => customer.companyName.toLowerCase().includes(searchCustomer.toLocaleLowerCase()))
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowQuickCustomerSelect(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (e.key === 'ArrowUp') {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      } else if (e.key === 'ArrowDown') {
        setActiveIndex(Math.min(activeIndex + 1, customers.length - 1));
      }
      const activeRow = document.querySelector('.quick-select-items .active');
      if (activeRow) {
        activeRow.scrollIntoView({
          block: 'center',
          inline: 'nearest' // Scrolls the row to the nearest edge of the container
        });
      }
    } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < filteredCustomers.length) {
      // Check if Enter key is pressed and an item is active
      const selectedCustomer = filteredCustomers[activeIndex];
      handleCustomerPick(selectedCustomer); // Call your function to select the customer
    }
  };
  return (
    <div className='confirmation-dialog for-customer-select'>
      <div className="confirmation-holder">
        <div className="c-header">
          <p>Select Customer</p>
        </div>
        <div className='c-body' tabIndex={0} onKeyDown={handleKeyDown}>
          <input
            type="search"
            onClick={() => setShowQuickCustomerSelect(true)}
            className='customer-searchee'
            onChange={handleInputChange}
            value={searchCustomer}
            placeholder="Enter Customer name or phone number"
            ref={(el) => {
              searchInputRef.current = el;
              inputFocus.current = el;
            }}
          />
          {showQuickCustomerSelect ?
            (
              <div className='item-list-holder customer-list-holder'>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Company Names</th>
                      <th>Customer Name</th>
                    </tr>
                  </thead>
                </table>
                <QuickSelectCustomer
                  handleCustomerPick={handleCustomerPick}
                  handleQuickSelectCustomerClick={handleQuickSelectCustomerClick}
                  activeIndex={activeIndex}
                  customers={filteredCustomers}
                  handleAddCustomerFormAdd={handleAddCustomerFormAdd}
                />
                <div className="extras">
                  <button onClick={handleAddCustomerFormAdd}>Add New Customer</button>
                </div>
              </div>
            ) : null}
        </div>
        {selectedCustomerNew.map((customer) => (
          <div className="customer-selected">
            <p>{customer.firstName} {customer.lastName}</p>
            <h3>{customer.companyName}</h3>
          </div>
        ))}
        <div className="b-tons">
          <button className="buttons">Ok</button>
          <button className="buttons" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerSelect