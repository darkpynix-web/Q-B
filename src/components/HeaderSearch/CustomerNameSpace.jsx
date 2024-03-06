import React from 'react'

const CustomerNameSpace = ({ selectedCustomerNew }) => {
    return (
        <>
            {selectedCustomerNew.map((customer) => (
                <div className="roll-two">
                    <div className="customer-name-space">
                        <div className="cus-details">
                            <h3>{customer.companyName}</h3>
                            <p>{customer.customerPhone}</p>
                            <p>{customer.customerAddress}, {customer.customerState}</p>
                        </div>
                        <div className="customer-sales-details">
                            <i className='bx bx-search-alt-2 btn' ></i>
                            <button className='btn'>X</button>
                        </div>
                    </div>
                </div >
            ))}
        </>
    )
}

export default CustomerNameSpace