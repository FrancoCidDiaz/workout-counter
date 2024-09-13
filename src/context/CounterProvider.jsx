import { useState,  createContext} from "react";


const CounterContext = createContext()

const CounterProvider = ({children}) => {


const [exercises, setExercises] = useState([]) 

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const fecha = new Date()


const numMes = fecha.getMonth();
const nombreMes = meses[numMes];
const dia = fecha.getDate()

const [alerta, setAlerta] = useState({});

const mostrarAlerta = mensaje => {
  setAlerta({ message: mensaje, type: 'error' });

  setTimeout(() => {
      setAlerta({});
  }, 3500);
};

const removeExercise = (exerciseToRemove) => {
  setExercises(exercises.filter(exercise => exercise !== exerciseToRemove));
}

const addExercise = (name) => {
  setExercises([...exercises, { name, series: [] }]);
};



const addSeries = (name) => {
  setExercises(exercises.map(exercise =>
    exercise.name === name
      ? { ...exercise, series: [...exercise.series, { weight: 0, reps: 0, rir: 0 }] }
      : exercise
  ));
};

const updateSeriesCount = (name, count) => {
  setExercises(exercises.map(exercise =>
    exercise.name === name
      ? { ...exercise, series: Array(count).fill({ weight: 0, reps: 0, rir: 0 }) }
      : exercise
  ));
};

const updateSeriesDetails = (exerciseName, seriesIndex, details) => {
  setExercises(exercises.map(exercise =>
    exercise.name === exerciseName
      ? { 
          ...exercise, 
          series: exercise.series.map((series, index) => 
            index === seriesIndex ? { ...series, ...details } : series
          )
        }
      : exercise
  ));
};




return (
<CounterContext.Provider
value={{
    exercises,
    setExercises,
    meses,
    fecha,
    nombreMes,
    dia,
    alerta,
    setAlerta,
    mostrarAlerta, 
    removeExercise,
    addExercise,
    addSeries,
    updateSeriesCount,
    updateSeriesDetails
}}>
  


  {children}
</CounterContext.Provider>
)

}



export {
    CounterProvider
}

export default CounterContext