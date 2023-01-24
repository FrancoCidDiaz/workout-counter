import { useContext } from "react";
import CounterContext from "./CounterProvider";

const useCounter = () => {

    return useContext(CounterContext)

}

export default useCounter