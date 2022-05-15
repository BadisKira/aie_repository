import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Toolbar from "@mui/material/Toolbar";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const columns = [
  { label: "Nom hotel", id: "hotel" },
  { label: "date d'arrivée", id: "DateArrivee" },
  {
    id: "dateSortie",
    label: "Date de sortie",
    align: "right",
  },
  {
    id: "nbrChambres",
    label: "Nombre de chambres",

    align: "right",
  },
  {
    id: "total",
    label: "Prix de le réservation",

    align: "right",
  },
];

function createData(hotel, DateArrivee, dateSortie, nbrChambres, total) {
  return { hotel, DateArrivee, dateSortie, nbrChambres, total };
}

// let rows = [];
// // let rows = [
// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),
// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),
// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),

// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),

// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// // ),

// // createData(
// //   "India's curry hotel",
// //   "29-01-2021",
// //   "01-02-2022",
// //   "2",
// //   "20000.00 DZD"
// // ),
// // ];

function ReservationsList() {
  const [page, setPage] = React.useState(0);
  const clientData = useSelector(state => state.client);
  const [reservationsInfo, setReservationsInfo] = useState(clientData.reservations);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setReservationsInfo(clientData.reservations);
  }, [clientData]);

  useEffect(() => {
    const { reservations, message } = reservationsInfo;
    //  function createData(hotel, DateArrivee, dateSortie, nbrChambres, total) {
    let temp = [];
    temp = reservations.map((reservation) => {
      return createData(reservation.nomh, reservation.datedep, reservation.datefin, reservation.nombrechambre, reservation.prixReservation)

    });

    setRows(temp);
    console.log("ROW ===>", rows)
  }, [reservationsInfo])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
            color="primary.dark"
          >
            {rows.length} Réservation(s) effectuée(s){" "}
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table stickyHeader size="medium">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * 5, page * 5 + 5).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.hotel}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={5}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
}

export default ReservationsList;
