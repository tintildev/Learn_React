import React from 'react'

export default function Todo( { todo }) {
    {/* Output of the task and checkbox */}
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} />
                {todo.name}
            </label>
        </div>
    )
}
