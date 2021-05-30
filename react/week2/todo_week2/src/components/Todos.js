import React, {useState} from 'react'
import Todo from './Todo'
import todos from '../data'


const Todos = () => {

  const [existingTodos, setExistingTodos]=useState([])

  const addRandomTodo=()=>{
    const randomTodo=todos[Math.floor(Math.random()* todos.length)]
    const duplicateTodo= existingTodos.find(todo=>todo.id===randomTodo.id)

if (duplicateTodo){
  window.alert(`Already exist on your list`)
}else {
  setExistingTodos([...existingTodos, randomTodo])
}

  }
 

const deleteTodoFunc=(id)=>{
  const filterTodos=existingTodos.filter(todo=>todo.id!==id) 
  console.log(filterTodos)
return setExistingTodos(filterTodos)

}

if (existingTodos.length===0){
  return <>
<div>
  <h1>My Todo App</h1>
      <button type="button" onClick={addRandomTodo} className="btn btn-secondary mt-3 mb-3">Add New Todos</button>
      <h2>No items Left</h2>
</div>
  </>
}


return (
<>
<div>
  <h1>My Todo App</h1>
      <button type="button" onClick={addRandomTodo}>Add New Todos</button>

      <ul>
      {existingTodos.map((todo) => <Todo key={todo.id} item={todo} onDelete={()=>deleteTodoFunc(todo.id)} />)}
    </ul>
</div>
</>
)

}

export default Todos          
