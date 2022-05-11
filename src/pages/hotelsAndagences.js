import NavBar from "../components/navbar";
import BanniereT2 from "../components/banniereType2";
import SectionHotels from "../components/hotels&agences/hotels";
import SectionVoyages from "../components/hotels&agences/voyages";
import { useLocation } from "react-router-dom";
import LayoutHotelAgence from "../components/hotels&agences/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllHotels } from "../redux/hotelSlice";
const HotelAndAgences = () => {
    const disptach = useDispatch();


    // useEffect(() => {
    //     // utilisation de disptach pour recuperer tout les hotels
    //     disptach(getAllHotels());
    //     // 
    // });
    useEffect(() => {
        // utilisation de disptach pour recuperer tout les agences ou voyages je sais plus
        // 
    }, []);


    const { pathname } = useLocation();
    return (
        <>
            <NavBar />
            <BanniereT2 title='Hotels/Agences' />
            <LayoutHotelAgence>
                {pathname === "/hotels" ?
                    <SectionHotels />
                    :
                    <SectionVoyages />
                }
            </LayoutHotelAgence>


        </>
    );

}

export default HotelAndAgences; 