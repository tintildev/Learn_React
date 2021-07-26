import React, { Component } from 'react';

class Wikipedia extends Component {

    constructor(props) {
        super(props);

        this .state = {
            searchText: ""
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onTextChange(event) {
        this.setState({
            searchText: event.target.value
        })
    }

    onSearchSubmit() {

    }

    render() {
        return (
            <div className="App">
                <h2>Wikipedia</h2>
                <input 
                    type="text" 
                    value={this.state.searchText} 
                    onChange={this.onTextChange}
                />

                <button onClick={this.onSearchSubmit}>Wikipedia durchsuchen</button>
            </div>
            
        )
    }
}

export default Wikipedia;