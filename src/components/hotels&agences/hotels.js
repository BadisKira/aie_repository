import { Pagination, Grid, Stack, Box, Typography, Select, MenuItem } from "@mui/material";

import SideBar2 from "./sideBar2";
import HotelCard from './hotelCard';
import { hotelFakeData } from "./dataFake";
import { useState } from "react";
import usePagination from "../pagination";

const SectionHotels = () => {
    const [page, setPage] = useState(1);
    const PER_PAGE = 7;
    const count = Math.ceil(hotelFakeData.length / PER_PAGE);
    const _DATA = usePagination(hotelFakeData, PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <>
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
                            <Typography color="primary" component='h2' variant="h3">Marakkech</Typography>
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
                                <Typography component='h3' variant="h5">10 Hotels trouvés</Typography>
                                <Box display={"flex"} alignItems="center">
                                    <Typography component='p' variant='subtitle1' marginRight={1}>Trier par : </Typography>
                                    <Select
                                        defaultValue={"prix"}
                                        sx={{ width: "150px" }}
                                        variant="outlined"
                                        size="small"

                                    >
                                        <MenuItem value={"prix"}>Prix</MenuItem>
                                        <MenuItem value={"Note"}>Note</MenuItem>
                                        <MenuItem value={"chance"}>chance</MenuItem>
                                    </Select>
                                </Box>
                            </Box>
                        </Stack>


                        {/** LA PARTIE DES CARDS DE L'Hotels */}
                        <Stack spacing={3}>
                            {_DATA.currentData().map(hotel => {
                                return <HotelCard
                                    key={hotel.id}
                                    title={hotel.hotel_name}
                                    desc={hotel.hotel_desc}
                                    img={hotel.hotel_img}
                                    equipement={hotel.hotel_equipement}
                                    evaluation={hotel.hotel_eval}
                                    fav={hotel.hotel_fav}
                                />
                            })}

                        </Stack>


                    </Box>

                </Grid>


                <Grid item xs={12} display="flex" alignItems="center" justifyContent={"center"}>
                    <Pagination
                        count={count}
                        page={page}
                        onChange={handleChange}
                        variant="outlined"
                        color="primary" />
                </Grid>
            </Grid >

        </>
    )
};

export default SectionHotels;