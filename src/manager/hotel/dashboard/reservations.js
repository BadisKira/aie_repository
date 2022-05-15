import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { getHotelInfoAdmin } from "../../../redux/hotelSlice";
import { useEffect, useState } from "react";

function createData(ID, roomNbr, clientID, clientName, dateArr, dateDep, prix) {
    return { ID, roomNbr, clientID, clientName, dateArr, dateDep, prix };
}

const rows = [
    createData(1, 102, 159, "Jean luc ", "14/05/2020", "25/07/2022", 17500),
    createData(2, 101, 11, "Anya", "24/07/2020", "25/07/2022", 1400),
    createData(3, 102, 109, "Badis ", "24/07/2020", "25/07/2022", 78000),
    createData(4, 103, 69, "Jamil ", "24/07/2020", "25/07/2022", 1200),
    createData(5, 104, 750, "Aymen balavoine ", "24/07/2020", "25/07/2022", 600),
    createData(6, 145, 11, "ERIC ZEMMOUR ", "24/07/2020", "25/07/2022", 78590),
    createData(7, 202, 15, "Jean la salle ", "24/07/2020", "25/07/2022", 6000),
    createData(8, 302, 50, "poutine ", "24/07/2020", "25/07/2022", 1500),
    createData(9, 402, 70, "papoune ", "24/07/2020", "25/07/2022", 17000),

];



const Reservations = () => {
    // const hotelData = useSelector(state => state.hotel);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getHotelInfoAdmin({ emailh: "Adminhotel17@gmail.com", passwordh: "AdminHotel1" })); //jwth 
    // }, [hotelData])
    // const [rows, setRows] = useState();
    return (
        <Grid>
            <Typography component={'h2'} variant='h5' fontWeight={600} marginBottom={2}>
                Reservations details
            </Typography>
            <TableContainer component={Paper} sx={{ height: "350px !important", overflowY: "auto" }}>

                <Table sx={{ minWidth: 650, }} aria-label="simple table" stickyHeader >
                    <TableHead  >
                        <TableRow>
                            <TableCell sx={{ fontWeight: '700' }}>ID</TableCell>

                            <TableCell sx={{ fontWeight: '700' }}>Room-number</TableCell>
                            <TableCell sx={{ fontWeight: '700' }} align="right">client-id</TableCell>
                            <TableCell sx={{ fontWeight: '700' }} align="right">client-name</TableCell>
                            <TableCell sx={{ fontWeight: '700' }} align="right">date-arrive</TableCell>
                            <TableCell sx={{ fontWeight: '700' }} align="right">date-depart</TableCell>
                            <TableCell sx={{ fontWeight: '700' }} align="right">prix</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.ID}
                                </TableCell>
                                <TableCell align="center">{row.roomNbr}</TableCell>
                                <TableCell align="right">{row.clientID}</TableCell>
                                <TableCell align="right">{row.clientName}</TableCell>
                                <TableCell align="right">{row.dateArr}</TableCell>
                                <TableCell align="right">{row.dateDep}</TableCell>
                                <TableCell align="right">{row.prix}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
};
export default Reservations;




