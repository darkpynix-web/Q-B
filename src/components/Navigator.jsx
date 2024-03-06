import React, { useEffect } from 'react'
import './componentsSyles/root.css';
import { Navigates } from './index';
import { quickbookCategories, purchasingCategories, employeesCategories, operationsCategories } from '../utils/constant';
import './componentsSyles/Navigator.css';
import './componentsSyles/grid.css';
const Navigator = ({ onSelectOption, held }) => {
  console.log(held)
  const heldNumner = () =>  {
    return held.length
  }
  useEffect(() => {
  heldCounter()    
  }, []);

  const heldCounter = () => {
    const x = document.querySelector(".quickBookPointOfSale-box .navigates:nth-child(6)");
    const y = heldNumner();
    x.setAttribute('data-counter', y)
  }

  return (
    <div className='navigator'>
      <div className='quickBookPointOfSale-box grid' data-content='QuickBook Point of Sales'>
        {quickbookCategories.map((item) => (
          <Navigates
            key={item.id}
            name={item.name}
            icon={item.icon}
            onClick={onSelectOption}
            href={item.name}
          />
        ))}
      </div>
      <div className='purchasing-box grid' data-content='Purchasing'>
        {purchasingCategories.map(item => (
          <Navigates
            key={item.id}
            name={item.name}
            onClick={onSelectOption}
            icon={item.icon} />

        ))}
      </div>
      <div className='employee-box grid' data-content='Employees'>
        {employeesCategories.map((item) => (
          <Navigates
            key={item.id}
            onClick={onSelectOption}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
      <div className='operations-box grid' data-content='Operations'>
        {operationsCategories.map((item) => (
          < Navigates
            key={item.id}
            onClick={onSelectOption}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Navigator