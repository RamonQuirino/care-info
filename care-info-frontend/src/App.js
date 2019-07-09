import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes';
import MainMenu from './components/layout/MainMenu';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MainMenu/>
                    <Routes/>
                </div>
            </Router>
        );
    }
}

export default App;
