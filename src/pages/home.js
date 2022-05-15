import NavBar from "../components/navbar";
import Footer from "../components/footer";
import CardsContainerVoyages from "../components/home/cardsContainer";
import DestinationsContainer from "../components/home/destinations";
import Banniere from "../components/home/banniere";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { loginClient } from "../redux/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import "../components/styles/home.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const homeRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Cookies.get('jwt') && Cookies.get('email')) {
            console.log("REDIS ")
            dispatch(loginClient({ emailBase: Cookies.get('email'), jwt: Cookies.get('jwt'), email: null, mdp: null }));
        }
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