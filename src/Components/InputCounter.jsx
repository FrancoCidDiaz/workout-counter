import React from 'react'
import { useState } from 'react'

const InputCounter = ({data}) => {

const [counter, setCounter] = useState(0)

const increment = () => {
    setCounter(counter + 1)
}

const decrement = () => {
    if(counter <= 0 ) return
    setCounter(counter - 1)
}

const reset = () => {
  if(window.confirm("Estas seguro que quieres resetear el ejercicio")){
  setCounter(0)}  
  return
  
}

  return (
    <div className='flex text-2xl my-2'>
        <div className='flex gap-10 mr-10'>
            <p>{data}</p>
            <div>{counter}</div>
        </div>
        <div className='flex gap-5'>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>-</button>
            
            <button onClick={increment}>+</button>

        </div>
    </div>
  )
}

export default InputCounter