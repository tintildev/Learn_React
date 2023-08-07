import './App.css';
import TodoList from './components/TodoList';
import React, { useState, useRef, useEffect, Component} from 'react';
import {v4 as uuid} from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  {/*  So that we can access the input field, we need useRef() */}
  const todoNameRef = useRef();
  {/*  Local storage */}
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  {/*  Local storage load */}
  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos)
    console.log("loade")
  }, [])

  {/*  Local storage save */}
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    console.log("SAVE")
  },[todos]);


  {/*Save the new state */}
  function handleAddTodo(e) {
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

  {/* checkbox */}
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete =!todo.complete;
    setTodos(newTodos);
  }

  {/* Cleare */}
  function handleCleareTodo() {
    const newTodos = todos.filter(todos => !todos.complete);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      {/* Returns a list of tasks. */}
      <TodoList todoList={todos} toggleTodo={toggleTodo} />

       {/*  So that we can access the input field, we need useRef() */}
      <input ref={todoNameRef} type="text" />

      {/*Save the new state event */}
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleCleareTodo}>Cleare Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
