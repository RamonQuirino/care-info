import React from 'react';
import { connect } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomerGrid = ({ results }) => (
    <div>
        <Paper >
            <Table >
                <TableHead>
                    <TableRow>                        
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Email</TableCell>                        
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    results.map(row => (
                     <TableRow key={row.id}>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                     </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </Paper>
    </div>
);

export default connect(state => ( {results: state.customerSearchResult }))(CustomerGrid);