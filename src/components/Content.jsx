import React from 'react'
import './componentsSyles/root.css'
import './componentsSyles/Content.css';
const Content = ({ customers }) => {

    console.log(customers)
    return (
        <div className="item-lister">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>COMPANY</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th >Phone Number</th>
                        <th>Email Address</th>
                        <th>Address</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.companyName}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.customerPhone}</td>
                            <td>{customer.customerEmail}</td>
                            <td>{customer.customerAddress}</td>
                            <td>{customer.customerState}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Content
