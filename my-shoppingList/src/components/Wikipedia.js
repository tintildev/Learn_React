import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Wikipedia extends Component {

    constructor(props) {
        super(props);

        this .state = {
            searchText: "",
            searchButtonClicked: false
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
        this.setState({
            searchButtonClicked: true
        })
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

                {(this.state.searchButtonClicked == true ? (
                    <Redirect to={"/wikipedia-results/" + this.state.searchText} />
                ): null)}
            </div>
            
        )
    }
}

export default Wikipedia;