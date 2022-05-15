import { Pagination, Grid, Stack, Box, Typography, Select, MenuItem } from "@mui/material";

import SideBar2 from "./sideBar2";
import HotelCard from './hotelCard';
import { hotelFakeData } from "./dataFake";
import { useState } from "react";
import usePagination from "../pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotelsVilleNote, getAllHotelsNote, getAllHotelsVille, getAllHotels, filtrerNote, filtrerEquipement } from "../../redux/hotelSlice";


import { useParams } from "react-router-dom";

const LayoutHotelAgence = ({ children, PaginationComp, miniTitle, tries }) => {

    const { typeR, ville } = useParams();
    const hotelData = useSelector(state => state.hotel);
    const dispatch = useDispatch();


    return (<>
        <Grid container columnSpacing={8} rowSpacing={4} id="section-hotel"
            sx={theme => ({
                background: "",
                marginTop: "25px",
                marginBottom: "25px",
                padding: "0px 25px 25px 25px",
                [theme.breakpoints.down("md")]: {
                    padding: 0,
                }
            })}>
            <Grid item xs={12} md={4} lg={3}>
                <SideBar2 />
            </Grid>

            <Grid item xs={12} md={8} lg={9}>

                <Box>
                    <Stack marginBottom={3} paddingLeft={3}>
                        <Typography color="primary" component='h2' variant="h3">
                            {ville}
                        </Typography>
                        <Box sx={(theme) => ({
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            [theme.breakpoints.only('xs')]: {
                                flexDirection: "column",
                                alignItems: "start"
                            },
                        })}>


                            <Typography component='h3' variant="h5">

                                {typeR === 'hotels' ? ` ${hotelData.hotels.length} Hotels ` : " 7 Voyages "}
                                trouvés
                            </Typography>


                            <Box display={"flex"} alignItems="center">
                                <Typography component='p' variant='subtitle1' marginRight={1}>Trier par : </Typography>
                                <Select
                                    defaultValue={"prix"}
                                    sx={{ width: "150px" }}
                                    variant="outlined"
                                    size="small"

                                >
                                    <MenuItem value={"ordre a-z"}
                                        onClick={() => {

                                            if (typeof ville == "undefined") {
                                                dispatch(getAllHotels());
                                            } else {
                                                dispatch(getAllHotelsVille(ville));
                                            }
                                            // dispatch(filtrerEquipement());
                                            // dispatch(filtrerNote());
                                        }}
                                    >Ordre A-z</MenuItem>
                                    {typeR === 'hotels' ?

                                        <MenuItem value={"Note"}
                                            onClick={() => {
                                                if (typeof ville == "undefined") {
                                                    dispatch(getAllHotelsNote());
                                                } else {
                                                    dispatch(getAllHotelsVilleNote(ville));
                                                }
                                            }}
                                        >Note</MenuItem>

                                        :
                                        <MenuItem value={"chance"}>Prix</MenuItem>
                                    }

                                </Select>
                            </Box>
                        </Box>
                    </Stack>




                    {children}

                </Box>

            </Grid>


            {/* <Grid item xs={12} display="flex" alignItems="center" justifyContent={"center"}>
                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary" />
            </Grid> */}
            {PaginationComp}
        </Grid >

    </>)
};
export default LayoutHotelAgence; 