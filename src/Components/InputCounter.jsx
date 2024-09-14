import React from 'react'
import useCounter from '../context/UseCounter'
import { useState, useEffect } from 'react'

const InputCounter = ({ data }) => {

  const { exercises, removeExercise, updateSeriesCount, updateSeriesDetails } = useCounter()

  const [counter, setCounter] = useState(0)
  const [exerciseDetails, setExerciseDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const exercise = exercises.find(ex => ex.name === data);
    if (exercise) {
      setCounter(exercise.series.length);
    }
  }, [exercises, data]);

  const increment = () => {
    setCounter(counter + 1);
    updateSeriesCount(data, counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      updateSeriesCount(data, counter - 1);
    }
  };

  const deleteExercise = () => {
    if (window.confirm("¿Estás seguro que quieres eliminar este ejercicio?")) {
      removeExercise(data)
    }
  };

  const handleChange = (index, field, value) => {
    updateSeriesDetails(data, index, { [field]: value });
  };

  const toggleDetails = () => {
    setShowDetails(prevState => !prevState); // Alternar la visibilidad de los detalles
  };

  return (
    <div className='flex flex-col text-2xl my-2 items-center w-full'>
      <div className='flex gap-1 w-100 mb-3 items-center'>
        <p className='text-center cursor-pointer' onClick={toggleDetails}>{data}</p>
      </div>
      <div className='flex items-center gap-5 mb-4'>
        <button onClick={deleteExercise}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </button>
        <button className='bg-violet-700 text-white w-10 h-10' onClick={decrement}>-</button>
        <button className='bg-violet-700 text-white w-10 h-10' onClick={increment}>+</button>
        <div>{counter}</div>
      </div>
      {showDetails && (
        <div className='flex flex-col items-center'>
          {Array.from({ length: counter }).map((_, index) => (
            <div key={index} className='mb-2 flex gap-2 w-11/12'>
              <input
                type='text'
                placeholder='Peso'
                //value={exerciseDetails[index]?.weight || ''}
                //onChange={(e) => handleChange(index, 'weight', e.target.value)}
                className='border p-2 w-1/3'
              />
              <input
                type='text'
                placeholder='Reps'
                //value={exerciseDetails[index]?.reps || ''}
                //onChange={(e) => handleChange(index, 'reps', e.target.value)}
                className='border p-2 w-1/3'
              />
              <input
                type='text'
                placeholder='RIR'
                //value={exerciseDetails[index]?.rir || ''}
                //onChange={(e) => handleChange(index, 'rir', e.target.value)}
                className='border p-2 w-1/3'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default InputCounter