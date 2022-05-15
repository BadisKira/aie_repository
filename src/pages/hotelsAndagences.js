import NavBar from "../components/navbar";
import BanniereT2 from "../components/banniereType2";
import SectionHotels from "../components/hotels&agences/hotels";
import SectionVoyages from "../components/hotels&agences/voyages";
import { useLocation, useParams, Navigate } from "react-router-dom";
import LayoutHotelAgence from "../components/hotels&agences/layout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllHotels, getAllHotelsVille } from "../redux/hotelSlice";
import Error404 from "../components/Error404";
const HotelAndAgences = () => {
    const disptach = useDispatch();

    const { typeR, ville } = useParams();
    useEffect(() => {
        // utilisation de disptach pour recuperer tout les hotels
        // 
        if (typeof ville !== 'undefined') {
            disptach(getAllHotelsVille(ville));
        } else {
            disptach(getAllHotels());

        }

    });
    useEffect(() => {
        // utilisation de disptach pour recuperer tout les agences ou voyages je sais plus
        // 
    }, []);



    // exemple sur comment est le resultat ['' , 'hotels' ,'nom ville']  voyages;
    return (
        <>
            <NavBar />
            <BanniereT2 title='Hotels/Agences' />
            <LayoutHotelAgence>
                {typeR === "hotels" ?
                    <SectionHotels />
                    :
                    <>
                        {
                            typeR === "voyages" ? <SectionVoyages />
                                :
                                <Navigate to="/404" replace={true} />
                        }
                    </>

                }
            </LayoutHotelAgence>


        </>
    );

}

export default HotelAndAgences; 