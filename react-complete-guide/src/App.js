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

    //It looks like HTML but is JSX code.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        
        {//IF -this.state.showPersons === true ? React.createElement()
        this.state.showPersons ? 
        <div>
          <Person name= {this.state.persons[0].name}
                  age= {this.state.persons[0].age} />
          <Person name= {this.state.persons[1].name} 
                  age= {this.state.persons[1].age}
                  /* Passing Method References Between Components */
                  click={this.switchStateHandler.bind(this, 'Martin!')}
                  /* onChange */
                  changed={this.nameChangeHandler}
                  >My Hobbies: Coding</Person>
          <Person name= {this.state.persons[2].name} 
                  age= {this.state.persons[2].age}/>
         </div> 
         //Else
         : null
         }
      </div> 
    );
    

  /* Understanding JSX - Our code will be converted into that
   return React.createElement('div', null, React.createElement('h1', {className: 'App'} , 'Do this work now?'));
  */
  }
}

export default App;
