import React from 'react'
import Todo from './Todo'

export default function TodoList( { todoList, toggleTodo }) {
    {/*Create todo components */}
    return (
        todoList.map(todoList => {
            return <Todo todo={todoList} toggleTodo={toggleTodo}/>
        })
    )
}
