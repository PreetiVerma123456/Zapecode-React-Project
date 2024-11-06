import React from 'react'
import './buttongroup.css'





const ButtonGroup = ({buttons, isSelected, setIsSelected}) => {
  return (
    <div className='button-container'>
        {
            buttons.map((text, index) =>{
       return <button className={isSelected == index ? "selected-button" : 'button'}
       onClick={() => setIsSelected(index)}
       >{text}</button>
            })
        }
        
      
    </div>
  )
}

export default ButtonGroup
