import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  /*State - React components has a built-in state object. 
  The state object is where you store property values that belongs to the component. 
  When the state object changes, the component re-renders.*/

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Martin', age: 32 },
      { name: 'Lisa', age: 31 }
    ],
    otherState: 'Other value',
    showPersons: false
  }

  /* No longer needed
  switchStateHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28},
        { name: 'Martin', age: 32},
        { name: 'Lisa', age: 30}
      ]
    })
  }
  */

  //Delet Event Listener
 deletePersonsHandler = (personIndex) => {
   const persons = this.state.persons;
   persons.splice(personIndex, 1);
   this.setState({persons: persons})
 }



  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Lisa', age: 26}
      ]
    })
  }

  //Switch Show
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherhit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    //JS Way for dynamic content
    let persons = null;
    if(this.state.showPersons) {
      
      // Outputting Lists   
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return<Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age ={person.age} />
          })}
         </div> 
      )
    }


    //It looks like HTML but is JSX code.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}

      </div> 
    );
    

  /* Understanding JSX - Our code will be converted into that
   return React.createElement('div', null, React.createElement('h1', {className: 'App'} , 'Do this work now?'));
  */
  }
}

export default App;
