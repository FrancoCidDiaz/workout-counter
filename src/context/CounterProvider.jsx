import { useState,  createContext} from "react";


const CounterContext = createContext()

const CounterProvider = ({children}) => {


const [exercises, setExercises] = useState([]) 

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const fecha = new Date()


const numMes = fecha.getMonth();
const nombreMes = meses[numMes];
const dia = fecha.getDate()
console.log(dia)


return (
<CounterContext.Provider
value={{
    exercises,
    setExercises,
    meses,
    fecha,
    nombreMes,
    dia
}}>
  


  {children}
</CounterContext.Provider>
)

}



export {
    CounterProvider
}

export default CounterContext