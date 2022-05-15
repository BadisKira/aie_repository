import * as React from 'react';
import Button from '@mui/material/Button';
import TableLayout from './TableLayout';
import { useDispatch, useSelector } from "react-redux";
import { getAllAgenceslAdmin } from "../../redux/adminSlice";







const Agences = () => {

    const adminData = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const [rows, setRows] = React.useState(adminData.agences);


    function createData(id, email, actif) {
        const valAct = actif == 1 ? 'actif' : 'bloqué';
        const eltBtn = <Button size="small" variant='contained' onClick={() => {
            // dispatch
        }}>
            {actif == 0 ? 'voulez vous activer ce compte ?' : 'voulez vous bloquer ce compte ?'}
        </Button>
        return { id, email, valAct, eltBtn };
    }

    React.useEffect(() => {
        dispatch(getAllAgenceslAdmin);
    }, []);

    React.useEffect(() => {
        //setRows();
        console.log(adminData);
        let temp = adminData.agences.map((hotel) => {
            return createData(hotel.idh, hotel.emailh, hotel.actif);
        });
        setRows(temp);
    }, [adminData]);
    return (
        <>
            <TableLayout rows={rows} />
        </>
    )
};
export default Agences; 