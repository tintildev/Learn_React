import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  //State
  state = {
    usernames: [
      { username: 'Martin'},
      { username: 'Klestil'},
      { username: 'Hallo World'}
    ]
  }

  // Event Handler
  switchStateHandler = (event) => {
    this.setState( {
      usernames: [
        { username: 'Martin'},
        { username: 'Klestil'},
        { username: 'Hallo World'}
      ]
    })
  }

  render() {
    const style= {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherhit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1 style={style}>Time to Practice - The Base Syntax</h1>
        <UserInput username={this.state.usernames[0].username} changed={this.switchStateHandler}/>
        <UserOutput username= {this.state.usernames[0].username} />
        <UserOutput username= {this.state.usernames[1].username} />
        <UserOutput username= {this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
