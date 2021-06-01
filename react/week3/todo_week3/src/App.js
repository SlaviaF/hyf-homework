import {useState, useEffect} from 'react'
import './App.css';
import Todos from './components/Todos'
//import PropTypes from 'prop-types'

function App() {
const[timer, setTimer]= useState(0)
  useEffect(() => {
 
    setTimeout(() => setTimer(timer+1), 1000)
   }, [timer])
  
  return (
    <div className="App">
      <h1>Todolist</h1>
      <h3>You have used {timer} seconds on this website</h3>
      <Todos />
    </div>
  );
}

export default App;


  