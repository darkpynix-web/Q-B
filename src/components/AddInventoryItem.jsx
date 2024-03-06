import React, { useEffect, useState } from 'react';
import './componentsSyles/root.css'
import './componentsSyles/AddInventoryItem.css';
const AddInventoryItem = ({ onAddItem, openAddInventoryForm, onCancel }) => {
    const [id, setId] = useState(100);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [isAddInventoryFormOpen, setIsAddInventoryFormOpen] = useState(openAddInventoryForm);
    useEffect(() => {
        setIsAddInventoryFormOpen(openAddInventoryForm)
    }, [openAddInventoryForm])
    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: id + 1,
            name: name,
            quantity: quantity,
            description: description,
            price: price,
            cost: cost,
        }
        setId(id + 1)

        onAddItem(newItem)

        setCost('');
        setName('')
        setPrice('')
        setDescription('')
        setQuantity('')
    }
    const handleCancel = () => {
        setIsAddInventoryFormOpen(true)
        onCancel();
    }


    return (
        <>
            {isAddInventoryFormOpen ? (
                <div className='form-holder'>
                    <form action="addInventoryItem" onSubmit={handleSubmit}>
                        <label className='form-head' htmlFor="name">Add Inventory Item <button onClick={handleCancel}>X</button></label>
                        <input
                            type="text"
                            id='name'
                            value={name}
                            placeholder='Enter Item Name'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <div className="basic-info">
                            <div className="box">

                                <div className="quantity-holder aedc">
                                    <label htmlFor="quantity">Item Quantity</label>
                                    <input
                                        type="number"
                                        id='quantity'
                                        placeholder='000'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                                <hr />
                                <div className="price-holder aedc">
                                    <label htmlFor="price" id='price'>Regular Price</label>
                                    <input
                                        type="number"
                                        id='price'
                                        placeholder='000'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <hr />
                                <div className="cost-holder aedc">
                                    <label htmlFor="cost">Cost Price</label>
                                    <input
                                        type="number"
                                        placeholder='000'
                                        id='cost'
                                        value={cost}
                                        onChange={(e) => setCost(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="descripton-holder">
                                <label htmlFor="description">Item Description</label>
                                <textarea
                                    id="description"
                                    cols="30"
                                    rows="10"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                ></textarea>
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={handleCancel}>Cancel</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>) : null}
        </>
    )
}

export default AddInventoryItem