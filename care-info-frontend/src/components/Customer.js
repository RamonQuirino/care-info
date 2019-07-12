import React, {Component} from 'react';

import CustomerSearch from "./customers/CustomerSearch"
import CustomerGrid from './customers/CustomerGrid';


export class Customer extends Component {
    render() {
        return (
            <div>
                <h1>Customer</h1>
                <CustomerSearch/>
                <hr/>
                <CustomerGrid/>
            </div>
        )
   }
};

export default Customer;