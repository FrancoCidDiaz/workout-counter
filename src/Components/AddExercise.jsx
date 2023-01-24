import React from 'react'
import { useState } from 'react'
import useCounter from '../context/UseCounter'

const AddExercise = () => {

const {exercises, setExercises} = useCounter()

const [newExercise, setNewExercise] = useState("")    

const handleSubmit = (e) => {
e.preventDefault()

//console.log(newExercise)
 setExercises([...exercises, newExercise])
//console.log(exercises)
}

  return (
    <div className='py-10 bg-violet-700 text-white'>
        <form className='flex flex-col items-center justify-center gap-3 w-2/4 mx-auto' onSubmit={handleSubmit}>

       <div className='input'>
        <input className='text-center text-black ' placeholder='Añade un ejercicio' type="text" onChange={e => setNewExercise(e.target.value)}/>
        </div>

        <div className='border rounded-xl input'>
            <input  value="Agregar" type="submit" />
            </div>
        
        </form>
       
       
    </div>
  )
}

export default AddExercise