import React from 'react'
import { useState } from 'react'
import useCounter from '../context/UseCounter'

const AddExercise = () => {

  const { exercises, setExercises, setAlerta, mostrarAlerta, alerta } = useCounter()

  const [newExercise, setNewExercise] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.querySelector("input[name='input']")
    if (input.value == "") {
      mostrarAlerta("No puedes agregar un ejercicio vacío");
      return;
    }

    setExercises([...exercises, newExercise])
    input.value = ""
  }

  const handleFocus = (e) => {
    e.target.value = "";
  }

  return (
    <div className='py-7 bg-violet-700 text-white rounded-b-lg' >
      <form className='flex flex-col items-center justify-center gap-3 w-2/4 mx-auto' onSubmit={handleSubmit}>

        <div className='input'>
          <input className='text-center text-black ' placeholder='Añade un ejercicio' autoComplete="off" name="input" type="text" onFocus={handleFocus} onChange={e => setNewExercise(e.target.value)} />
        </div>

        <div className='border rounded-xl'>
          <input className='px-12 active:bg-violet-900 duration-300' value="Agregar" type="submit" />
        </div>

      </form>

      {alerta.message && <p className='text-center text-white mt-2'>{alerta.message}</p>}
    </div>
  )
}

export default AddExercise