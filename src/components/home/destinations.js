import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Destination from "./destination";
// import '../styles/cards.css';

import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const tabDes = [
    { dest: "Singapour", img: process.env.PUBLIC_URL + " /assets/singapour.jpg" },
    { dest: "Bejaia", img: process.env.PUBLIC_URL + " /assets/bejaia.jfif" },
    { dest: "Tokyo", img: process.env.PUBLIC_URL + " /assets/tokyo.jfif" },
]

const DestinationsContainer = () => {

    const desRef = useRef(null);
    const tl = useRef();
    useLayoutEffect(() => {
        const dests = desRef.current.querySelectorAll('.destination-paper');
        const destsTxt = desRef.current.querySelectorAll('.destination-text ');
        const desTitre = desRef.current.querySelector('h1');


        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: desTitre,
                start: "top center",
                end: "+=400",
            }
        })
            .to(dests, {
                // maxWidth: '320px',
                // maxHeight: '320px',
                opacity: 1,
                duration: .5,
                stagger: 0.5,
            }).to(destsTxt, {
                opacity: 1
            })



    }, []);

    return (

        <Container style={{ minWidth: "80%", margin: "40px auto" }} ref={desRef} >
            <Typography component={"h1"} variant="h4" marginY={5} display="flex" justifyItems={"center"}>
                Les destination les plus populaires de
                cette saison
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>

                {tabDes.map((des) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={des.dest}>
                            <Destination dest={des.dest} img={des.img} />
                        </Grid>
                    )
                })

                }
                {/* <Grid item xs={12} md={6} lg={4}>
                    <Destination dest={"Porto Rico"} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Destination dest={"Maldives "} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Destination dest={"Seville de l'espagne antique"} />
                </Grid> */}

            </Grid>

            <div className="see-more" >
                <Link to='' >Voir plus</Link>
            </div>


        </Container >)
};

export default DestinationsContainer; 