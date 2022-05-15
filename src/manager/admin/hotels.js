import * as React from 'react';

import Button from '@mui/material/Button';
import TableLayout from './TableLayout';
import { useDispatch, useSelector } from "react-redux";
import { AllHotelsAdminSite, activationCompteHotel } from "../../redux/adminSlice";


export default function Hotels() {

    const adminData = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const [rows, setRows] = React.useState(adminData.hotels);

    React.useEffect(() => {
        dispatch(AllHotelsAdminSite);
    }, []);

    function createData(id, email, actif) {
        const valAct = actif == 1 ? 'actif' : 'bloqué';
        const eltBtn = <Button size="small" variant='contained' onClick={() => {
            dispatch(activationCompteHotel({ idh: id, actif: Math.abs(Number(actif) - 1) }));
        }}>
            {actif == 0 ? 'voulez vous activer ce compte ?' : 'voulez vous bloquer ce compte ?'}
        </Button>
        return { id, email, valAct, eltBtn };
    }

    React.useEffect(() => {
        //setRows();
        console.log(adminData);
        let temp = adminData.hotels.map((hotel) => {
            return createData(hotel.idh, hotel.emailh, hotel.actif);
        });
        setRows(temp);
    }, [adminData]);


    return (
        <TableLayout rows={rows} />
    );
}
