import React, { Component } from 'react';
import Panel from "./Panel";
import PropTypes from 'prop-types';


class TodoAdd extends Component {
    constructor(props) {
        super(props);

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoInputChange = this.onTodoInputChange.bind(this);

        this.state = {
            newTodo: "Todo hinzufügen"
        }
    }

    onTodoInputChange(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
    }
    

    render() {
        return (
            <Panel title="Todo hinzufügen">
                <input 
                    type="text" 
                    onChange={this.onTodoInputChange}
                    value={this.state.newTodo}
                    className="inputField"
                />
                <button className="TodoAdd__btn" onClick={this.onTodoAdd} >Todo hinzufügen</button>
            </Panel>
        )
    }



}

//Muss enthalten Funktion
TodoAdd.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default TodoAdd;