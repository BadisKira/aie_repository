import { Pagination, Grid, Stack, Box, Typography, Select, MenuItem, Alert } from "@mui/material";

import SideBar2 from "./sideBar2";
import HotelCard from './hotelCard';
import { hotelFakeData } from "./dataFake";
import { useEffect, useState } from "react";
import usePagination from "../pagination";
import { useDispatch, useSelector } from "react-redux";



const SectionHotels = () => {
    const dispatch = useDispatch();
    const hotelData = useSelector(state => state.hotel);




    const [page, setPage] = useState(1);
    const PER_PAGE = 11;
    const count = Math.ceil(hotelData.hotels.length / PER_PAGE);
    const _DATA = usePagination(hotelData.hotels, PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };




    const PaginationCompH = () => (<Grid item xs={12} display="flex" alignItems="center" justifyContent={"center"}>
        <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary" />
    </Grid>)
        ;

    return (
        <>
            {/** LA PARTIE DES CARDS DE L'Hotels */}
            {hotelData.hotels.length === 0 ? <h1>VIDE TOTAL</h1> :
                <Stack spacing={3} alignItems='center'>
                    {_DATA.currentData().map(hotel => {
                        return <HotelCard
                            key={hotel.idh}
                            title={hotel.nomh}
                            desc={""}
                            img={hotel.imgh}
                            equipement={hotel.equipementh}
                            evaluation={hotel.note}
                            fav={hotel.hotel_fav}
                        />
                    })}

                </Stack>

            }
        </>
    )
};

export default SectionHotels;