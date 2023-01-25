
import './App.css';
import AddExercise from './Components/AddExercise';
import Header from './Components/Header';
import InputList from './Components/InputList';
import Temporizador from './Components/Temporizador';
import TemporizadorSeries from './Components/TemporizadorSeries';


function App() {
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
