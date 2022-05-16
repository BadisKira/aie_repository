import * as React from 'react';

import Button from '@mui/material/Button';
import TableLayout from './TableLayout';
import { useDispatch, useSelector } from "react-redux";
import { activationCompteHotel, AllHotelsAdminSite } from "../../redux/adminSlice";
import { Navigate } from 'react-router-dom';


export default function Hotels() {

    function createData(id, email, actif) {
        const valAct = actif == 1 ? 'actif' : 'bloqué';
        const eltBtn = <Button size="small" variant='contained' onClick={() => {
            dispatch(activationCompteHotel({ idh: id, actif: Math.abs(Number(actif) - 1) }))
                .then(() => {
                    window.location.reload();
                });
        }}>
            {actif == 0 ? 'voulez vous activer ce compte ?' : 'voulez vous bloquer ce compte ?'}
        </Button>
        return { id, email, valAct, eltBtn };
    }



    const dispatch = useDispatch();
    const adminData = useSelector(state => state.admin);
    const [rows, setRows] = React.useState([]);


    React.useEffect(() => {
        dispatch(AllHotelsAdminSite());
    }, []);

    React.useEffect(() => {
        let temp = [];
        if (adminData.hotels.hotels) {
            console.log('GET HOTELS', adminData.hotels);
            temp = adminData.hotels.hotels.map((hotel) => {
                return createData(hotel.idh, hotel.emailh, hotel.actif);
            });
        }
        setRows(temp);
    }, [adminData]);





    // React.useEffect(() => {
    //     //setRows();
    //     if (Allrows.length > 0) {
    //         let temp = Allrows.map((hotel) => {
    //             return createData(hotel.idh, hotel.emailh, hotel.actif);
    //         });
    //         setRows(temp);
    //     } else {
    //         console.log('vide totaal');
    //     }
    // }, []);


    return (
        <TableLayout rows={rows} />
    );
}
