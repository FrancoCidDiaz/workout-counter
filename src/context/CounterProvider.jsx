import { useState,  createContext} from "react";


const CounterContext = createContext()

const CounterProvider = ({children}) => {


const [exercises, setExercises] = useState([]) 

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const fecha = new Date()


const numMes = fecha.getMonth();
const nombreMes = meses[numMes];
const dia = fecha.getDate()

const [alerta, setAlerta] = useState([])

const mostrarAlerta = alerta => {
  setAlerta(alerta)

  setTimeout(() => {
      setAlerta({})
  }, 3500);
}

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
    mostrarAlerta
}}>
  


  {children}
</CounterContext.Provider>
)

}



export {
    CounterProvider
}

export default CounterContext