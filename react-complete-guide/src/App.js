import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    //It looks like HTML but is JSX code.
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>I need a root element</p>
      </div> 
    );
    

  /* Understanding JSX - Our code will be converted into that
   return React.createElement('div', null, React.createElement('h1', {className: 'App'} , 'Do this work now?'));
  */
  }
}

export default App;
