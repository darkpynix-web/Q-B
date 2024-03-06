import React from 'react'
import './componentsSyles/root.css'
import './componentsSyles/Content.css';
const ItemsHolder = ({ items }) => {
    console.log(items)
    return (
        <div className="item-lister">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th > Type</th>
                        <th>Cost Price</th>
                        <th>Reg Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.type}</td>
                            <td>{item.cost}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ItemsHolder