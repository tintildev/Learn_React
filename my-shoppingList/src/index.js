import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { incrementCounter } from './actions/actions';
import counter from './reducers/index';
import TodoList from './components/TodoList';
import './index.css';

let store = createStore(counter);
console.log(store.getState());

ReactDOM.render(
  //Connect to Store with Provider
  <Provider store={store}>
    <div className="Shoppinglist__Div">
      <App />
      <TodoList />
    </div>
    
  </Provider>,
  document.getElementById('root')
);