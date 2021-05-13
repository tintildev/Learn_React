import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { incrementCounter } from './actions/index';
import counter from './reducers/index';
import './index.css';

let store = createStore(counter);
console.log(store.getState());

ReactDOM.render(
  //Connect to Store with Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);