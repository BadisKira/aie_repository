import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardVoyage from "../cardVoyage";
// import '../styles/cards.css';

import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const bestTrips = [{

}]



const CardsContainer = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const cards = containerRef.current.querySelectorAll('.card');
        const titlecards = containerRef.current.querySelector('h1');
        console.log(titlecards);;

        gsap.fromTo(cards, { y: -80, opacity: 0, delay: 0.5 }, {
            y: 0, opacity: 1, duration: 1, stagger: .5,
            scrollTrigger: {
                trigger: titlecards,
                start: "-150px center",
                top: "top center",
            }
        })
    }, []);
    return (

        <Container style={{ minWidth: "80%", marginTop: "50px", marginBottom: "50px" }} ref={containerRef} >
            <Typography component={"h1"} variant="h4" marginY={5} >
                Des voyages à ne pas manquer
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>

                <Grid item xs={12} md={6} lg={3}>
                    <CardVoyage destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <CardVoyage destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <CardVoyage destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <CardVoyage destination={"Randonnée à l’assaut de Yemma Gouraya"} />
                </Grid>

            </Grid>

            <div className="see-more" >
                <Link to='' >Voir plus</Link>
            </div>


        </Container >)
};

export default CardsContainer; 