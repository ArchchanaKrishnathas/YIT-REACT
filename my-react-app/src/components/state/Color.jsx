import React from 'react'
import { useState } from 'react'
function Color() {
    const [redcount, setRed] = useState(0);
    const [greencount, setGreen] = useState(0);
    const [bluecount, setBlue] = useState(0);

const handleRedIncrease = () => {
    setRed((prevState) => {
       /*  if(prevState +20 > 0 && prevState +20 < 255){
            return prevState + 20;
        } else {
            return prevState= 255;
        } */
        return prevState + 20 > 255 ? 255 : prevState + 20;
    })
}
const handleRedDecrease = () => {
    setRed((prevState) => {
       return prevState - 20 < 0  ? 0 : prevState - 20;
    })
}
const handleGreenIncrease = () => {
    setGreen((prevState) => {
       return prevState + 20 > 255 ? 255 : prevState + 20;
    })
}
const handleGreenDecrease = () => {
    setGreen((prevState) => {
         return prevState - 20 < 0  ? 0 : prevState - 20;
    })
}
const handleBlueIncrease = () => {
    setBlue((prevState) => {
        return prevState + 20 > 255 ? 255 : prevState + 20;
    })
}
const handleBlueDecrease = () => {
    setBlue((prevState) => {
        return prevState - 20 < 0  ?  0 : prevState - 20;
    })
}
  return (
    <div className='container'>
        <div className='box' style={{backgroundColor:`rgb(${redcount}, ${greencount}, ${bluecount})`}}>
        </div>
        <div>
            <h4>Red:{redcount}</h4>
            <button onClick={handleRedIncrease}>+</button>
            <button onClick={handleRedDecrease}>-</button>
        </div>
        <div>
            <h4>Green:{greencount}</h4>
            <button onClick={handleGreenIncrease}>+</button>
            <button onClick={handleGreenDecrease}>-</button>
        </div>
        <div>
            <h4>Blue:{bluecount}</h4>
            <button onClick={handleBlueIncrease}>+</button>
            <button onClick={handleBlueDecrease}>-</button>
        </div>
    </div>
  )
}

export default Color