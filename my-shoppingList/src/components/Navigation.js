import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render () {
        return (
            <div className="Navigation">
                <ul>
                    <li className="Navigation__link"><Link to="/">Startseite</Link></li>
                    <li className="Navigation__link"><Link to="/todolist">Todos ({this.props.todosLength})</Link></li>
                    <li className="Navigation__link"><Link to="/click">Klickzähler ({this.props.counter})</Link></li>
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        todosLength: state.todos.length
    }
}

let mapDispatchToProps = {}

let NaviagtionContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
export default NaviagtionContainer;