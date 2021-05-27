import './App.css';
import Todos from './components/Todos'
import{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
const App=()=>{
const[timer, setTimer]=useState(0)

useEffect(() => {
 
 setTimeout(() => setTimer(timer+1), 1000)
})
  return (
    <>
<div style={{textAlign:'center'}}>
     <h3>You have used {timer} seconds on this website</h3>
    <div className="row justify-content-center align" >
          <Todos/>
    </div>
    </div>
</>
  );
}

export default App;
