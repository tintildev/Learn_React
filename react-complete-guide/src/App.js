import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {

    //It looks like HTML but is JSX code.
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />
        <Person />
        <Person />
      </div> 
    );
    

  /* Understanding JSX - Our code will be converted into that
   return React.createElement('div', null, React.createElement('h1', {className: 'App'} , 'Do this work now?'));
  */
  }
}

export default App;
