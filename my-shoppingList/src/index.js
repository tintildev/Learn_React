import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { incrementCounter } from './actions/actions';

import './index.css';
import { HashRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import App from './components/App';
import counter from './reducers/index';
import TodoList from './components/TodoList';
import Navigation from './components/Navigation';
import Wikipedia from './components/Wikipedia';

let store = createStore(counter);
console.log(store.getState());

ReactDOM.render(
  //Connect to Store with Provider
  <Provider store={store}>

    <HashRouter>
      <div>
        <Navigation></Navigation>
        <Route exact={true} path="/" component={Home} />
        <Route path="/click" component={App} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/wikipedia" component={Wikipedia} />
      </div>
    </HashRouter>

  </Provider>,
  document.getElementById('root')
);