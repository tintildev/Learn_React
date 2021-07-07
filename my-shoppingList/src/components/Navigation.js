import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div className="Navigation">
                <ul>
                    <li className="Navigation__link"><Link to="/">Startseite</Link></li>
                    <li className="Navigation__link"><Link to="/todolist">Todos</Link></li>
                    <li className="Navigation__link"><Link to="/click">Klickzähler</Link></li>
                </ul>
            </div>
        )
    }
}

export default Home;