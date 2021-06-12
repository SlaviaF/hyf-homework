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
    <div className="main_page">
    <div className="App">
      <h1 className="heading">Todo App</h1>
      <h3 className="timer">You have used {timer} seconds on this website</h3>
      <Todos />
    </div>
    </div>
  );
}

export default App;


  