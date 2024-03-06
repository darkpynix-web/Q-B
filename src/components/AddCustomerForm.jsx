import React, { useState, useEffect } from 'react'

const AddCustomerForm = ({ openAddCustomerForm, onCancel, onAddCustomer}) => {
    const [id, setId] = useState(11);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("")
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerState, setCustomerState] = useState("");
    const [isAddCustomerFormOpen, setIsAddCustomerFormOpen] = useState(openAddCustomerForm);
    useEffect(() => {
        setIsAddCustomerFormOpen(openAddCustomerForm)
    }, [openAddCustomerForm]);
    const handleSubmit = (e) => {
        e.preventDefault();

        const newCustomer = {
            id: id + 1,
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            customerPhone: customerPhone,
            customerEmail: customerEmail,
            customerAddress: customerAddress,
            customerState: customerState,
        }
        setId(id + 1)

        onAddCustomer(newCustomer)
        setFirstName("")
        setLastName("")
        setCompanyName("")
        setCustomerPhone("")
        setCustomerEmail("")
        setCustomerAddress("")
        setCustomerState("")
    }

    const handleCancel = () => {
        setIsAddCustomerFormOpen(true)
        onCancel();
    }


    return (
        <>
            {isAddCustomerFormOpen ? (
                <div className="form-holder">
                    <form action="addCustomerForm" className='addCustomerForm' onSubmit={handleSubmit}>
                        <label htmlFor="name" className="form-head">Add Customer <button onClick={handleCancel}>X</button></label>
                        <div className="cus-full-name">
                            <input
                                type="text"
                                id='firstName'
                                value={firstName}
                                placeholder="First name"
                                onChange={(e) => {setFirstName(e.target.value)}}
                            />
                            <input
                                type="text"
                                id='lastName'
                                value={lastName}
                                placeholder="Last name"
                                onChange={(e) => {setLastName(e.target.value) }}
                            />
                        </div>
                        <div className="company-name">
                            <input
                                type="text"
                                id='companyName'
                                value={companyName}
                                placeholder="Company"
                                onChange={(e) => {setCompanyName(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="contact-info-box">
                            <label htmlFor="">Basic Info</label>
                            <ul>
                                <li>
                                    <p>Phone</p>
                                    <input
                                        type="number"
                                        id='customerPhone'
                                        value={customerPhone}
                                        onChange={(e) => { setCustomerPhone(e.target.value)}}
                                    />
                                </li>
                                <li>
                                    <p>E-mail</p>
                                    <input
                                        type="email"
                                        id='customerEmail'
                                        value={customerEmail}
                                        onChange={(e) => {setCustomerEmail(e.target.value) }}
                                    />
                                </li>
                                <li>
                                    <p>Streey/City</p>
                                    <input
                                        type="text"
                                        id='customerAddress'
                                        value={customerAddress}
                                        onChange={(e) => {setCustomerAddress(e.target.value) }}
                                    />
                                </li>
                                <li>
                                    <p>State</p>
                                    <input
                                        type="text"
                                        id='customerState'
                                        value={customerState}
                                        onChange={(e) => {setCustomerState(e.target.value) }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="control-buttons">
                            <button onClick={handleCancel}>Cancel</button>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    )
}

export default AddCustomerForm