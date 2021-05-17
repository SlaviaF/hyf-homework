import React from 'react'
import "../style.css"

const Todo = (props) => {
    console.log(props)
    return (
        <div className="todo-align">
            <p>{props.item.todo}</p>

        </div>
    )
}

export default Todo
