import React, {useState} from 'react'
import Border from './Border'
import PropTypes from 'prop-types'

const Todo = ({todo, todos, onDelete, setInputValue}) => {
const [checked, setChecked]=useState(false)
const [isEditMode, setIsEditMode]=useState(false)
const [description, setDescription]=useState(todo.description)

const onEdit=()=>{
    return(
        setIsEditMode(!isEditMode)
    )
}


const onUpdate=(id)=>{
    
todos.forEach(todo =>{
    if(todo.id===id) {
    return todo.description=description
    }
})
    setInputValue(description)
    setIsEditMode(false)
    setInputValue(" ")

}
    

    return (
        <div>  
        <span>  
            <Border>
            {
                isEditMode? <>
                    <li style= {{ 'textDecoration': checked ? 'line-through' : 'none' }}> <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} /> {todo.deadline}  
                <input  type="checkbox" name="checkbox" checked={checked} onChange={()=>{setChecked(!checked)}}/>  
                <button onClick={()=>onDelete(todo.id)}>Delete</button>
                <button onClick={()=>onUpdate(todo.id)}>Update</button>
                </li>
                </>

            :
                
                <li style= {{ 'textDecoration': checked ? 'line-through' : 'none' }}> {todo.description} | {todo.deadline}  
              <input  type="checkbox" name="checkbox" checked={checked} onChange={()=>{setChecked(!checked)}} />  
                <button onClick={()=>onDelete(todo.id)}>Delete</button>
                <button onClick={onEdit}>Edit</button>
                </li>
            }
            </Border> 
         </span>
        </div>
    )
}



export default Todo

Todo.propTypes = {
    todos : PropTypes.arrayOf(PropTypes.object),
    todo:PropTypes.object,
    onDelete:PropTypes.func,
    setInputValue:PropTypes.func
    
};