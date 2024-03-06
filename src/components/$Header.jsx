import React, { useState, useEffect, useRef } from 'react'
import './componentsSyles/root.css'
import { TrippleDot, CustomerNameSpace, EmployeeHeader, HeldReceiptSearch, IWantTo, HomeSearch, SalesSearch, CustomerSearch, SalesHistorySearch, CustomerListSearch, DepartmentListSearch, ItemListSearch } from './HeaderSearch/index';
import './componentsSyles/$Header.css'
import IWantToMenu from './IWantToMenu';
const $Header = (
  { label,
    iWantToControl,
    homeSearchControl,
    customerNameSpaceControl,
    customerSearchControl,
    makesalesSearchControl,
    salesHistorySearchControl,
    showDetailsControl,
    customerListSearchControl,
    departmentListSearchControl,
    itemListControl,
    trippleDotControl,
    selectedCustomerNew,
    heldReceiptControl,
    handleAddInventoryFormAdd,
    handleAddCustomerFormAdd,
    items,
    closeShowQuickItemSelect,
    onSelectedItem,
    employeeheadercontrol,
    handleOpenUserForm,
    selectedOption,
    onSelectOption,
    handleCustomerSelectOpen,
    handleShowPreview,
    togglePreviewButtonName,
    handleUnhold
  }
) => {

  const [showIWantToMenu, setShowIWantToMenu] = useState(false);
  const iWantToMenuRef = useRef(null);

  useEffect(() => {
    const handleIwantToMenu = (event) => {
      if (iWantToMenuRef.current && !iWantToMenuRef.current.contains(event.target)) {
        setShowIWantToMenu(false);
      }
    };
    document.addEventListener('click', handleIwantToMenu);

    return () => {
      document.removeEventListener('click', handleIwantToMenu);
    }
  }, [])

  const toggleWantTo = () => {
    setShowIWantToMenu(!showIWantToMenu)
  }
  return (
    <div className='container-header'>
      <div className="roll-one">
        {iWantToControl &&
          <IWantTo
            toggleWantTo={toggleWantTo}
          />}
        <h4 >{label}</h4>
        {showIWantToMenu &&
          <IWantToMenu
            onSelectOption={onSelectOption}
            selectedOption={selectedOption}
          />}
        {homeSearchControl &&
          <HomeSearch
          />}
        {makesalesSearchControl &&
          <SalesSearch
            onSelectedItem={onSelectedItem}
            closeShowQuickItemSelect={closeShowQuickItemSelect}
            items={items}
            handleAddInventoryFormAdd={handleAddInventoryFormAdd}
          />}
        {trippleDotControl &&
          <TrippleDot
            handleCustomerSelectOpen={handleCustomerSelectOpen}
            handleAddCustomerFormAdd={handleAddCustomerFormAdd}
          />}
        {employeeheadercontrol &&
          <EmployeeHeader
            handleOpenUserForm={handleOpenUserForm}
          />}
        {customerSearchControl &&
          <CustomerSearch
          />}
        {heldReceiptControl &&
          <HeldReceiptSearch
            handleShowPreview={handleShowPreview}
            togglePreviewButtonName={togglePreviewButtonName}
            handleUnhold={handleUnhold}
          />}
        {salesHistorySearchControl &&
          <SalesHistorySearch
          />}
        {showDetailsControl &&
          <ShowDetails
          />}
        {customerListSearchControl &&
          <CustomerListSearch
            handleAddCustomerFormAdd={handleAddCustomerFormAdd}
          />}
        {departmentListSearchControl &&
          <DepartmentListSearch
          />}
        {itemListControl &&
          <ItemListSearch
            handleAddInventoryFormAdd={handleAddInventoryFormAdd}
          />}
      </div>
      {customerNameSpaceControl &&
        <CustomerNameSpace
          selectedCustomerNew={selectedCustomerNew}
        />
      }
    </div>
  )
}

export default $Header