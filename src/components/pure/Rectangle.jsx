import React from 'react';
import { useState } from 'react';


const Rectangle = ({getRandomColor, stopChange, rgb}) => {
    /*const getRandomColor = () => {
        setRGB(`rgb(${randomColor()[0]},${randomColor()[1]},${randomColor()[2]})`);
    }
    const stopChange = () => {
        setRGB('rgb(0, 0, 0)')
    }
    const [rgb, setRGB] = useState('rgb(0, 0, 0)')*/
  return (
    <>
        <div onMouseOver={getRandomColor} onDoubleClick={stopChange}  onMouseOut={stopChange} 
        
         className='rectangle' style={{backgroundColor: rgb}} >
    
        </div>
    </>
  )
}

export default Rectangle