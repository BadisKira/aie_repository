import { Pagination, Grid, Stack, Box, Typography, Select, MenuItem, Alert } from "@mui/material";

import SideBar2 from "./sideBar2";
import HotelCard from './hotelCard';
import { hotelFakeData } from "./dataFake";
import { useEffect, useState } from "react";
import usePagination from "../pagination";
import { useSelector } from "react-redux";

import Loader from "../Loading";


const NotFoundComp = () => {
    return (
        <div
            style={{
                textAlign: "center", transform: 'translateY(50px)',
                color: "red", width: "80%", margin: "0px auto", paddingBottom: "25px"
            }}
        >
            <h1>
                Erreur Not found
            </h1>
            <h3>Nous sommes desolés de vous dire que nous avons trouver aucun resultat pour votre recherche </h3>
        </div>)
};


const SectionHotels = () => {
    const hotelData = useSelector(state => state.hotel);
    const clientData = useSelector(state => state.client);
    const [clientFav, setClientFav] = useState([]);
    useEffect(() => {
        console.log("EREN YEAGER ==>", clientData);
        if (clientData.favs.favoris) {
            let temp = clientData.favs.favoris.map((fv) => {
                return fv.idh;
            })
            setClientFav(temp);
        }

        // console.log(clientData.favs.);

    }, [clientData]);


    useEffect(() => {
        // console.log(clientFav);
    }, [clientFav])





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
            {hotelData.etat === "pending" ? <Loader /> :
                <>
                    {
                        hotelData.hotels.length === 0 ?
                            <>
                                <NotFoundComp />
                            </> :
                            <Stack spacing={3} alignItems='center'>
                                {_DATA.currentData().map(hotel => {
                                    return <HotelCard
                                        idh={hotel.idh}
                                        key={hotel.idh}
                                        title={hotel.nomh}
                                        desc={""}
                                        img={hotel.imgh}
                                        equipement={hotel.equipementh}
                                        evaluation={hotel.note}
                                        fav={clientFav.includes(hotel.idh)}
                                    />
                                })}

                            </Stack>

                    }
                </>
            }
        </>
    )
};

export default SectionHotels;