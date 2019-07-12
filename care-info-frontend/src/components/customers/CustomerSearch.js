import React from 'react';

import { connect } from "react-redux";

import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

function searchCustomers(){
    return {
        type: "SEARCH_CUSTOMERS",
    }
}

const CustomerSearch = ({dispatch}) => (
    <div>
        <FormControl>
            <InputLabel htmlFor="customer-email">Email</InputLabel>
            <Input id="customer-email" aria-describedby="my-helper-text" />
            <InputLabel htmlFor="customer-name">Nome</InputLabel>
            <Input id="customer-name" aria-describedby="my-helper-text" />
            <Button onClick={() => dispatch(searchCustomers())}>Buscar</Button>
            <FormHelperText id="my-helper-text">Utilize os campos acima para buscar os pacientes</FormHelperText>
        </FormControl>
    </div>
);

export default connect()(CustomerSearch);