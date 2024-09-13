import React from 'react'
import useCounter from '../context/UseCounter'
import InputCounter from './InputCounter'

const InputList = () => {

    const {exercises} = useCounter()

  return (
    <div className='text-dark pt-10 flex flex-col items-center'>
      {exercises.map((exercise,index) => (
    
        <InputCounter key={index} data={exercise}/>

      )          
      )}  



    </div>
  )
}

export default InputList