import React, { Component } from 'react';
import { incrementCounter, addTodo } from '../actions/actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <h2>Todos: </h2>
                <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            // Key is required to correct errors
                            <li key={todo.id}>{todo.title}</li>
                        )
                    })}
                </ul>
                <button onClick={() => this.props.addTodo("3. Test Todo") 
                // Anonymous function so that code is only executed when clicked
                }>
                    Todo hinzufügen
                </button>
            </div>
        )
    }
}
// Saves the central status
let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

// run action addTodo
let mapDispatchToProps = {
    addTodo: addTodo
}

// Connect with Redux
let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);


export default TodoListContainer;
