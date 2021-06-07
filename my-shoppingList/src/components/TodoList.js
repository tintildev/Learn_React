import React, { Component } from 'react';
import { incrementCounter } from '../actions/index';
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
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {}

let TodoListContainer = 
    connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
