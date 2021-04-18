import './App.css';
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import Panel from './components/Panel';

class App extends Component {

  constructor(props) {
    super(props);

    //Test Zustand
    this.state = {
      todos: [
        {id: 1, title: "Obst kaufen"},
        {id: 2, title: "Programmieren lernen"},
        {id: 3, title: "3. TODO"}
      ]
    }

    this.addTodo = this.addTodo.bind(this);
  }

  //Add Methode
  addTodo(title) {
    //State zwischenspeichern
    let todos = this.state.todos;

    //letzte ID herausfinden
    let maxId = 0;
    for(let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }
    //Hinzufügen
    todos.push({id: (maxId + 1), title: title});

    //Neuen State setzten
    this.setState({
      todos: todos
    })
  }

  
  render() {
    return (
      <div className="container">
        <div className="App">
          <h1>Todo-App</h1>
          <TodoAdd onAdd={this.addTodo} />
          <p />
          <TodoList todos={this.state.todos} />
          
        </div>
      </div>
    );
  }
}

export default App;
