import React from 'react'
import '../componentsSyles/QuickSelectBox.css'

const QuickSelectItem = ({ handleItemPick, handleQuickSelectItemClick, items, activeIndex }) => {
  return (
    <div onClick={handleQuickSelectItemClick} tabIndex={0} className="quick-select-items" >
      <table>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={activeIndex === index ? 'active' : ''}
              onClick={ () => handleItemPick(item)}
              onKeyPress={(e) => handleItemPick(item)}
            tabIndex={0}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>₦{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length === 0 && <h3>No Items added yet, please add items</h3>}
    </div>
  )
}

export default QuickSelectItem
