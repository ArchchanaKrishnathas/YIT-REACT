import React, { useState } from 'react'

function Counter() {
    const [count,setCount]= useState(0);

    const handlerIncrease= () => setCount((prevState) => {
        return prevState +1 ;
    })

    const handlerDecrease= () => setCount((prevState) => {
        return prevState -1 ;
    })

    const handlerReset= () => setCount((0));
       
  return (
    <div>
       <h1>Count: {count}</h1>

        <button onClick={handlerDecrease}>Decrease</button>
        <button onClick={handlerIncrease}>Increase</button>
        <button onClick={handlerReset}>Reset</button>
       
    </div>
  )
}

export default Counter