import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  /*State - React components has a built-in state object. 
  The state object is where you store property values that belongs to the component. 
  When the state object changes, the component re-renders.*/

  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'asdfg1', name: 'Martin', age: 32 },
      { id: 'sdfhg1', name: 'Lisa', age: 31 }
    ],
    otherState: 'Other value',
    showPersons: false
  }

  //Delet Event Listener
 deletePersonsHandler = (personIndex) => {
  //Updating State Immutably - new Array 
  //const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons: persons})
 }



  nameChangeHandler = (event, id) => {
    //return index of state Array
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      }
    );
    
    //temp person what we want to edit
    const person = {
      ...this.state.persons[personIndex]
    };

    //edit person
    person.name = event.target.value;
    
    //temp array from state
    const persons = [...this.state.persons];

    //update array
    persons[personIndex] = person;

    //update state
    this.setState({persons: persons})


  }

  //Switch Show
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    //JS Way for dynamic content
    let persons = null;
    if(this.state.showPersons) {
      
      // Outputting Persons with List of Person   
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler} />;
    }

    return (
      <div className="App">  
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div> 
    );
  }
}

export default App;
