import React, { Component } from 'react';
import Panel from './Panel';
import App from './App';
import TodoList from './TodoList';

class Home extends Component {
    render () {
        return (
            <Panel title="Willkommen bei der TodoList">
                <App />
                <TodoList />
            </Panel>
        )
    }
}

export default Home;