import React, {useState, useEffect} from 'react'
import '../App.css';


const Todo = (props) => {

    const [checked, setChecked]=useState(false);
    const toggle=()=> setChecked(!checked);
    

  useEffect(() => {
    
         const todoItem=document.getElementById(props.item.id)
           if(checked){
              todoItem.className="text-decoration-line-through"  
           }
           else{
               todoItem.classList.remove("text-decoration-line-through")
           }
         
           })

    return (
        <>
            <tr>
            <th scope="row">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checked} onChange={toggle}/>
                    <label className="form-check-label " htmlFor="flexCheckChecked">
                    </label>
            </div>
            </th >
                <td id ={props.item.id}>{props.item.description} <button key='todo.id'type="button" style={{marginLeft:'10em'}} onClick={props.onDelete} className="btn btn-info">Delete</button></td>
            </tr>
        </>
    )
    
}

export default Todo
