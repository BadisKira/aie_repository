import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardV from "./card";
import './styles/cards.css';
const CardsContainer = () => {
    return (

        <Container fluid style={{ minWidth: "80%", marginTop: "50px", marginBottom: "50px" }}>
            <Typography component={"h1"} variant="h4" marginY={5} >
                Des voyages à ne pas manquer
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>

                <Grid item xs={12} md={6} lg={3}>
                    <CardV destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <CardV destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <CardV destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <CardV destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

            </Grid>

            <div className="see-more" >
                <Link to='' >Voir plus</Link>
            </div>


        </Container >)
};

export default CardsContainer; 