import './App.css';
import TodoList from './components/TodoList';
import React, { useState, useRef, Component} from 'react';
import {v4 as uuid} from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  {/*  So that we can access the input field, we need useRef() */}
  const todoNameRef = useRef();

  

  {/*Save the new state */}
  function handleAddTodo(e) {
    console.log("Test")
    {/* Get the input */}
    const name = todoNameRef.current.value;

    {/* Checks the input */}
    if (name === '') return

      {/* Sets a new state with all old entries */}
      setTodos(prevTodos => {
        return [...prevTodos, { id: uuid(), name: name, complete: false}]
      })

       {/* Clears the input field */}
      todoNameRef.current.value = null;
    
  }

  return (
    <div className="App">
      {/* Returns a list of tasks. */}
      <TodoList todoList={todos} />

       {/*  So that we can access the input field, we need useRef() */}
      <input ref={todoNameRef} type="text" />

      {/*Save the new state event */}
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Cleare Complete</button>
    </div>
  );
}

export default App;
