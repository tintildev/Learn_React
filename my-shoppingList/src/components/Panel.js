import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
    render() {
        return (
            <div className="Panel">
                <h1 className="Panel-title">
                    {this.props.title}
                </h1>
                <div className="Panel-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    /** Der Titel vom Panel */
    title: PropTypes.string.isRequired
}

export default Panel;