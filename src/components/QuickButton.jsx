import React, {useEffect} from 'react'
import './componentsSyles/root.css';
import './componentsSyles/Button.css'
const QuickButton = ({held,  image, action, onClick }) => {
  const heldNumner = () =>  {
    return held.length
  }
  useEffect(() => {
  heldCounter()    
  }, [held]);

  const heldCounter = () => {
    const x = document.querySelector(".button:nth-child(9) .cont p");
    const y = heldNumner();
    x.setAttribute('data-counter', `(${y})`)
  }
  return (
    <div className='button' onClick={onClick}>
      <div className="cont">
        <img src={image} alt={action} />
        <p>{action}</p>
      </div>
    </div>
  )
}

export default QuickButton