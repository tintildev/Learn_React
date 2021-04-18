import React, { Component } from 'react';
import Panel from "./Panel";
import PropTypes from 'prop-types';

class TodoList extends Component {

    render() {
      return (
        <Panel title="Todos">
          <ul className="App-todo">
            {this.props.todos.map(function(todo) {
              return (
                <li className="App-ListItem" key={todo.id}>#{todo.id}: {todo.title}</li>
              )
            })}
          </ul>
        </Panel>
      )
    }
}

//Muss enthalten Array mit id und String
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TodoList;