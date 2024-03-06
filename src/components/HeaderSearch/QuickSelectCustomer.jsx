import React from 'react'

const QuickSelectCustomer = ({handleCustomerPick, handleQuickSelectCustomerClick, customers, activeIndex }) => {
  return (
    <div className="quick-select-items quick-select-customers" onClick={handleQuickSelectCustomerClick} tabIndex={0}  >
      <table>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={customers.id}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleCustomerPick(customer)}
              onKeyPress={() => handleCustomerPick(customer)}
              tabIndex={0}
            >
              <td>{customer.id}</td>
              <td>{customer.companyName}</td>
              <td>{customer.firstName} {customer.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {customers.length === 0 && <h3>No such customer</h3>}
    </div>
  )
}

export default QuickSelectCustomer