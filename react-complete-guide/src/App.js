import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  /*State - React components has a built-in state object. 
  The state object is where you store property values that belongs to the component. 
  When the state object changes, the component re-renders.*/
  
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Martin', age: 32},
      {name: 'Lisa', age: 31},
    ]
  }

  render() {
    //It looks like HTML but is JSX code.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <buttun>Switch Name</buttun>
        <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age}>My Hobbies: Coding</Person>
        <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div> 
    );
    

  /* Understanding JSX - Our code will be converted into that
   return React.createElement('div', null, React.createElement('h1', {className: 'App'} , 'Do this work now?'));
  */
  }
}

export default App;
