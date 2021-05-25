import React, { Component } from 'react';
import { incrementCounter } from '../actions/index';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="Counter">
          <h1>Counter: {this.props.value}</h1>
          <button className="Counter__btn" onClick={this.props.onIncrement}>Click</button>
        </div>
      </div>
    );
  }
}

// Get State
let mapStateToProps = function(state) {
  return {
    value: state.counter
  }
}

// Count up the counter
let mapDispatchToProps = {
  onIncrement: incrementCounter
}

// Connect
let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
