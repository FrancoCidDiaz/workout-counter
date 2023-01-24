
import './App.css';
import AddExercise from './Components/AddExercise';
import Header from './Components/Header';
import InputList from './Components/InputList';
import Temporizador from './Components/Temporizador';


function App() {
  return (
    <div className="App">
  <Header/>
  <AddExercise/>
  <Temporizador/>
  <InputList/>
    </div>
  );
}

export default App;
