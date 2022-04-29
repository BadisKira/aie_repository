import NavBar from "../components/navbar";
import Footer from "../components/footer";
import CardsContainerVoyages from "../components/home/cardsContainer";
import DestinationsContainer from "../components/home/destinations";
import Banniere from "../components/home/banniere";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../components/styles/home.css";
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    const homeRef = useRef(null);

    useEffect(() => {
        // const titleB = homeRef.current.querySelector('.banniere-text');
        // const appbar = homeRef.current.querySelector('.app-bar');
        // gsap.fromTo(appbar, { backgroundColor: "transparent", duration: .5, delay: 0 }, {
        //     backgroundColor: "grey",
        //     duration: 0.5,
        //     delay: 0,
        //     scrollTrigger: {
        //         trigger: titleB,
        //         toggleActions: "restart none reverse none",
        //         start: "+=0 70",
        //         end: "+=50 70",
        //     }

        // });



    }, []);
    return (
        <div ref={homeRef}>
            <NavBar />
            <Banniere />
            <CardsContainerVoyages />
            <DestinationsContainer />
            <Footer />
        </div>

    )

};

export default Home; 