import React, { Component } from 'react';
import style from './App.module.css';
import './App.css';
import Person from './Person/Person'

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
      
      // Outputting Lists   
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return<Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age ={person.age} 
              key={person.id}
              changed= {(event) => this.nameChangeHandler(event, person.id)} />
          })}
         </div> 
      );
          /*
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      */
    }

   
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

    //It looks like HTML but is JSX code.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={style.button} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}

      </div> 
    );
  }
}

export default App;
