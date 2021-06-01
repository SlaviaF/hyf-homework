import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'




const API_URL= "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
const Todos = () => {

const [loading, setLoading]=useState(true)
const[todos, setTodos]= useState([])
const [inputValue, setInputValue]=useState(" ")
const [dateValue, setDateValue]= useState(null)



 const fetchTodos= async()=>{
  try{
    setLoading(true)
    const todoData=await fetch(API_URL)
    const todoList=await todoData.json()
    console.log(todoList)
    setTodos(todoList)
    setLoading(false)

  }
     catch(error){
         console.log(error)
     }
 }

 useEffect(()=>{
     fetchTodos()

 }, [])

 const addTodoOnclick=()=>{
    setTodos((previousTodos)=>[...previousTodos, {
    id : new Date().getMilliseconds(), 
    description:inputValue,
    deadline:dateValue.toISOString().slice(0, 10),
} ])
}
if (loading){
   return (
       <div> Loading ...</div>
   ) 
}

const onDelete=(id)=>{
    
    const filterTodos= todos.filter(todo=>todo.id!==id)
    setTodos(filterTodos)
}

    const onSubmit=(e)=>{
        e.preventDefault()
    }
    
 

    return (
    <>
       <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="desc">
                Todo description:
                <input type="text" 
                name="desc" 
                id="desc" 
                value={inputValue}
                onChange={(event)=>setInputValue(event.target.value)}/>
            </label>
            <br />
            deadline: 
            <DatePicker 
            selected={dateValue} 
            onChange={date=>setDateValue(date)}
            dateFormat='yyyy/MM/dd'
            minDate ={new Date()}
            
            />
        </form>

        <div>
        </div>
        <button onClick={addTodoOnclick}>Add todo</button> 

        <ul>
        
            {todos.map(todo=><Todo key = {todo.id} 
            todo={todo} 
            todos={todos}
            onDelete={onDelete} 
            setInputValue={setInputValue}
            />)}
        
        </ul>
    </div>
    </>
    )
}


export default Todos