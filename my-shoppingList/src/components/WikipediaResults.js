import React, { Component } from 'react';

class WikipediaResults extends Component {


    render() {
        return (
            <div className="App">
                <div className="WikipediaSearch">
                    WikipediaResults: {this.props.match.params.search}
                </div>
            </div>
            
        )
    }
}

export default WikipediaResults;