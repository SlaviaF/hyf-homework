import React from 'react'
import Todo from './Todo.js'
import "../style.css"
const Todos = () => {
    const todos = [
        { id: 1, todo: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
        { id: 2, todo: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
        { id: 3, todo: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
    ];

    const todoItems = todos.map((todo) => <Todo key={todo.id} item={todo} />)
    return (
        <>
            { todoItems}
        </>
    )
}

export default Todos;
