import React, { Component } from 'react';
import { wikipediaSearch } from './../actions/index';
import { connect } from 'react-redux';

class WikipediaResults extends Component {

    componentDidMount() {
        this.props.onPerformSearch("Berlin");
    }


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

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = {
    onPerformSearch: wikipediaSearch
}

let WikipediaResultsContainer = 
    connect(mapStateToProps, mapDispatchToProps)(WikipediaResults)

export default WikipediaResultsContainer;