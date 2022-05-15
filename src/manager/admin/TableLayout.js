import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function TableLayout({ rows }) {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table" sx={{ overflowY: "auto" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Identifiant</TableCell>
                        <TableCell align="center">Email </TableCell>
                        <TableCell align="center">Actif</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id + " pmo"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.valAct}</TableCell>
                            <TableCell align="center">{row.eltBtn}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
