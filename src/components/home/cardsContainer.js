import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardVoyage from "../cardVoyage";
// import '../styles/cards.css';

import { useRef, useEffect, useLayoutEffect, useState } from "react";
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

        gsap.fromTo(cards, { y: -80, opacity: 0, delay: 0.5 }, {
            y: 0, opacity: 1, duration: 1, stagger: .5,
            scrollTrigger: {
                trigger: titlecards,
                start: "-150px center",
                top: "top center",
            }
        })
    }, []);

    //destination, agence, tarif, img,
    const [trips, setTrips] = useState([
        {
            idA: 1,
            destination: "Randonnée à l’assaut de Yemma Gouraya",
            img: process.env.PUBLIC_URL + '/assets/dest1.jpg',
            tarifs: 17500,
            agence: "Lyon d'or",
        }
        , {
            idA: 2,
            destination: "Randonnée à l’assaut de Yemma Gouraya",
            img: process.env.PUBLIC_URL + '/assets/dest2.jpg',
            tarifs: 25000,
            agence: "Aigle d'or",
        }
        , {
            idA: 3,
            destination: "Randonnée à l’assaut de Yemma Gouraya",
            img: process.env.PUBLIC_URL + '/assets/dest1.jpg',
            tarifs: 22500,
            agence: "Ane d'or",
        }
        , {
            idA: 4,
            destination: "Randonnée à l’assaut de Yemma Gouraya",
            img: process.env.PUBLIC_URL + '/assets/dest2.jpg',
            tarifs: 3000,
            agence: "argent d'or",
        }
        ,
    ]);

    useEffect(() => {
        // how to get the best trips in here
    }, []);



    return (

        <Container style={{ minWidth: "80%", marginTop: "50px", marginBottom: "50px" }} ref={containerRef} >
            <Typography component={"h1"} variant="h4" marginY={5} >
                Des voyages à ne pas manquer
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>

                {trips.map(trip => {
                    return <Grid item xs={12} md={6} lg={3} key={"vo" + trip.idA}>
                        <CardVoyage destination={trip.destination} img={trip.img} tarif={trip.tarifs} agence={trip.agence} />
                    </Grid>
                })}
            </Grid>

            <div className="see-more" >
                <Link to='' >Voir plus</Link>
            </div>


        </Container >)
};

export default CardsContainer; 