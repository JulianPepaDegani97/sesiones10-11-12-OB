import React, { useState } from 'react';
import Rectangle from './pure/Rectangle';
import randomColor from '../utils/randomColor';

const MainComponent = () => {
    const getRandomColor = () => {
        setRGB(`rgb(${randomColor()[0]},${randomColor()[1]},${randomColor()[2]})`);
    }
    const stopChange = () => {
        setRGB('rgb(0, 0, 0)')
    }
    const [rgb, setRGB] = useState('rgb(0, 0, 0)')
  return (
    <div className='container'>
        <Rectangle getRandomColor={getRandomColor} stopChange={stopChange} rgb={rgb} />
    </div>
  )
}

export default MainComponent