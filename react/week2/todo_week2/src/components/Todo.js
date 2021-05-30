import React, {useState} from 'react'
import '../App.css';


const Todo = (props) => {

    const [checked, setChecked]=useState(false);
    const toggle=()=> setChecked(!checked);
  
           
    return (
        <>
            <li>
              <div> <input type="checkbox" id="checkboxCheck" onChange={toggle}/>
            <span style={{ 'textDecoration': checked ? 'line-through' : 'none' }}id ={props.item.id}>{props.item.description} <button key='todo.id'type="button" onClick={props.onDelete}>Delete</button></span>
            </div>
            </li>     
        </>
    )
    
}

export default Todo
