import React, { useState } from 'react';
import './componentsSyles/root.css'
import './componentsSyles/Box.css'
import './componentsSyles/@media.css'
import { AccountForm, AccountManagement, SwitchUser } from './accounts/index';
import { inbuiltItems, inbuiltUsers, inbuiltCustomers, inbuiltHeldReceipts } from '../utils/items';
import { Nav, Container, AddInventoryItem, HeaderMenuSmallDev, AddCustomerForm } from './index'
const Box = ({ handleOpenUserForm, onSelectUser, onSwitchUserCancel, openSwitchUser, onAddAccountFormCancel, openUserForm, selectedOption, onSelectOption, openNavbar }) => {
  const [items, setItems] = useState([...inbuiltItems]);
  const [users, setUsers] = useState([...inbuiltUsers]);
  const [customers, setCustomers] = useState([...inbuiltCustomers]);
  const [held, setHeld] = useState([...inbuiltHeldReceipts]);
  const [unheldReceipt, setUnheldReceipt] = useState(null);
  const [isAddInventoryFormOpen, setIsAddInventoryFormOpen] = useState(false)
  const [isAddCustomerFormOpen, setIsAddCustomerFormOpen] = useState(false)
  const [shortcutKeysOpen, setShortcutKeysOpen] = useState(false);

  const handleUnhold = (unheldReceipt, updatedHeld) => {
    setHeld(updatedHeld)

    setUnheldReceipt(unheldReceipt)
  }
  const handleShortcutKeysOpen = (e) => {
    setShortcutKeysOpen(true)
  }
  const handleShortcutKeysClose = () => {
    setShortcutKeysOpen(false)
  }
  
  const handleAddInventoryFormAdd = () => {
    setIsAddInventoryFormOpen(true)
  }
  const handleAddInventoryFormCancel = () => {
    setIsAddInventoryFormOpen(false)
  }
  const handleAddCustomerFormAdd = () => {
    setIsAddCustomerFormOpen(true)
  }
  const handleAddCustomerFormCancel = () => {
    setIsAddCustomerFormOpen(false)
  }
  const addNewCustomer = (newCustomer) => {
    setCustomers((currentCustomer) => [...currentCustomer, newCustomer])
  }
  const addNewItem = (newItem) => {
    setItems((currentItem) => [...currentItem, newItem]);
  }
  const handleUpdatedHeld = (updatedHeld) => {
    setHeld((currentArray) => [...currentArray, updatedHeld])
    console.log('helds from container', held)
  }
  
  const addNewUser = (newUser) => {
    setUsers((currentUsers) => [...currentUsers, newUser]);
  }


  return (
    <div className='box'>
      <Nav
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
        held={held}
      />
      <HeaderMenuSmallDev
        openNavbar={openNavbar}
        handleShortcutKeysOpen={handleShortcutKeysOpen}
      />
      <Container
        handleAddInventoryFormAdd={handleAddInventoryFormAdd}
        handleAddCustomerFormAdd={handleAddCustomerFormAdd}
        handleOpenUserForm={handleOpenUserForm}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
        items={items}
        users={users}
        held={held}
        customers={customers}
        onHeldReceipt={handleUpdatedHeld}
        isOpen={shortcutKeysOpen}
        handleShortcutKeysClose={handleShortcutKeysClose}
        onUnhold={handleUnhold}
        unheldReceipt={unheldReceipt}
      />
      <AddInventoryItem
        onCancel={handleAddInventoryFormCancel}
        onAddItem={addNewItem}
        openAddInventoryForm={isAddInventoryFormOpen}
      />
      <AddCustomerForm
        openAddCustomerForm={isAddCustomerFormOpen}
        onAddCustomer={addNewCustomer}
        onCancel={handleAddCustomerFormCancel}
      />
      <AccountForm
        onAddAccountFormCancel={onAddAccountFormCancel}
        onAddNewUser={addNewUser}
        openUserForm={openUserForm}
      />
      <SwitchUser
        onSwitchUserCancel={onSwitchUserCancel}
        openSwitchUser={openSwitchUser}
        users={users}
        onSelectUser={onSelectUser}
      />

    </div>
  )
}

export default Box
