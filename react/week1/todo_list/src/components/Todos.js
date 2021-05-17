import React from 'react'
import Todo from './Todo.js'
import "../style.css"
const Todos = () => {
    const todos = [
        { todo: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
        { todo: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
        { todo: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
    ];

    const todoItem = todos.map((todo, index) => <Todo key={index} item={todo} />)
    return (
        <>
            { todoItem}
        </>
    )
}

export default Todos;
