import { Grid, Pagination } from "@mui/material";
import { voyagesFake } from "./dataFake";
import CardVoyage from "../cardVoyage";
import { Typography, Container } from "@mui/material";
import usePagination from "../pagination";
import { useState } from "react";

const SectionVoyages = () => {
    const [page, setPage] = useState(1);
    const PER_PAGE = 6;
    const count = Math.ceil(voyagesFake.length / PER_PAGE);
    const _DATA = usePagination(voyagesFake, PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };



    return (
        <Container id="section-voyage">
            <Typography component={"h2"} variant="h3" marginTop={5} sx={theme => ({
                [theme.breakpoints.down('sm')]: {
                    fontSize: '30px'
                }
            })} >
                Meilleures Voyages vers votre meilleures Destinations
            </Typography>
            <Grid container rowSpacing={5} columnSpacing={3} marginY={5}>

                {_DATA.currentData().map((voyage) => {
                    return (
                        <Grid item key={voyage.voyage_id} xs={12} md={6} lg={4}>
                            <CardVoyage
                                actions={true}
                                tarif={voyage.voyage_tarif}
                                img={voyage.voyage_img}
                                destination={voyage.voyage_dest}
                                agence={voyage.voyage_agence}
                            />
                        </Grid>

                    )
                })}

                <Grid item xs={12} display="flex" alignItems="center" justifyContent={"center"}>
                    <Pagination
                        count={count}
                        page={page}
                        onChange={handleChange}
                        variant="outlined"
                        color="primary" />
                </Grid>
            </Grid>
        </Container>
    )
};

export default SectionVoyages; 