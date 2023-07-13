
import './App.css'
import { useEffect } from 'react';
import AddExercise from './Components/AddExercise';
import Header from './Components/Header';
import InputList from './Components/InputList';
import Temporizador from './Components/Temporizador';
import TemporizadorSeries from './Components/TemporizadorSeries';


function App() {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
  <Header/>
  <AddExercise/>
  <TemporizadorSeries/>
  <InputList/>
  <Temporizador/>
    </div>
  );
}

export default App;
