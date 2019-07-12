import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";
import  customerStore  from "./store/CustomerReducer"


import Routes from './components/Routes';
import MainMenu from './components/layout/MainMenu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={customerStore}>
                    <Router>
                        <div>
                            <MainMenu />
                            <Routes />
                        </div>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
