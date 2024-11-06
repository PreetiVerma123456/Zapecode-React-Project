import React, { useState } from 'react';
import './card.css'
import ButtonGroup from './ButtonGroup';
import Component1 from './Component1';
import Component2 from './Component2';

const buttons = [
    "GSTR Filing", "E-Invoicing"
]
const RenderComponent = ({index}) => {
    switch (index) {
        case 0: return <Component1 />
            
            break;
            case 1: return <Component2 />
            
            break;
        default:
            break;
    }
}

function Card() {
    const [isSelected, setIsSelected] = useState(0);
    return (
        <>
        <div className='container'>
    <div className='card-container'>
        <ButtonGroup  buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected}/>
        </div>
        <div className='data-container'>
        <RenderComponent  index={isSelected} />
        </div>
   
       
        </div>
        </>
    )
}
export default Card