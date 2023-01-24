import React from 'react'
import useCounter from '../context/UseCounter'

const Header = () => {

    const {nombreMes, dia} = useCounter()
 
  return (
    <div className='pt-8 flex flex-col items-center gap-4 bg-violet-700 text-white text-center'>
        <h1 className='text-5xl '>Contador Rutina de ejercicios</h1>
        <div className='fecha text-3xl'>{dia} {nombreMes} </div>
        <h2 className='text-3xl'>Ingresa tu rutina de hoy</h2>
    </div>
  )
}

export default Header