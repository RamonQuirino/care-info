import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Customer from './Customer';
import Tables from './Tables';
import NoMatch from './NoMatch';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/customer' component={Customer}/>
                    <Route path='/tables' component={Tables}/>
                    <Route component={NoMatch}/>
                </Switch>
            </main>
        )
    }
};

export default Routes;